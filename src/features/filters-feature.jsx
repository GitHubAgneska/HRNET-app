import { createSelector } from "@reduxjs/toolkit"
import { initialState, employeesListState, filtersState, store } from '../state/store'
import { paramFilterChanged, searchtermFilterChanged, entriesFilterChanged } from '../state/actions/Actions'

export const requestFiltering = (filterParam, reverse) => {
    store.dispatch(paramFilterChanged(filterParam, reverse))
}

// SELECTOR : MEMOIZED SELECTOR To allow multiple filters and derive state from employeesList state
export const selectFilteredEmployees = createSelector(

     initialState.employeesList.currentList, // input selector 1
     initialState.filters,                   // input selector 2

    ( currentList, filters ) => {       // output selector: takes both input selectors as params
        console.log('MEMOIZED SELECTOR CALLED')
        // const { previous, next } = 
        filters = initialState.filters
        currentList = initialState.employeesList.currentList
        console.log('currentList===>', currentList)
        
        const currentParamFilter = initialState.filters.currentParamFilter
        const currentSearchterm = initialState.filters.searchterm
        const currentEntries = initialState.filters.entries

        // SORT BY
        let sortedByParam;
        if (currentParamFilter.param !== '') {
            
            const listParam = currentParamFilter.param
            const reverseOrder = currentParamFilter.reverseOrder
            // ex : param = 'firstName'
            // here, a, b = employee objects of employees array
            
            if (reverseOrder === true ) { // true = descendant order
                sortedByParam = currentList.sort( (a, b) => a.listParam.localeCompare(b.listParam))
                console.log('LIST sortedByParam in createSELECTOR=', sortedByParam)
            }  else {  // false (default) = ascendant order
                sortedByParam = currentList.sort( (a, b) => b.listParam.localeCompare(a.listParam))
            }
        } else { sortedByParam = currentList }


        // SEARCH BY
        
        // ENTRIES
        console.log('MEMOIZED SELECTOR returned list sortedByParam=', sortedByParam)
        return sortedByParam
    }
)