import { createSelector } from "@reduxjs/toolkit"
import {  initialState, employeesListState, filtersState, store } from '../state/store'
import { FILTER_PARAM_CHANGED  } from '../state/actions/actions-types'

export const requestFiltering = () => {
    store.dispatch(FILTER_PARAM_CHANGED)
}

// SELECTOR : MEMOIZED SELECTOR To allow multiple filters in same component with no re-render
export const selectFilteredEmployees = createSelector(
    
     initialState.employeesList.currentList, // input selector 1
     initialState.filters,                   // input selector 2

    ( currentList, filters ) => {       // output selector: takes both input selectors as params

        // const { previous, next } = filters
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
            }  else {  // false (default) = ascendant order
                sortedByParam = currentList.sort( (a, b) => b.listParam.localeCompare(a.listParam))
            }
        } else { sortedByParam = currentList }


        // SEARCH BY
        
        // ENTRIES

        return sortedByParam
    }
)