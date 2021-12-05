import { createSelector } from "@reduxjs/toolkit"
import { initialState, employeesListState, filtersState, store } from '../state/store'
import { paramFilterChanged,filtersStatusChanged, searchtermFilterChanged, entriesFilterChanged } from '../state/actions/Actions'
import { searchText } from '../utils/searchText'

export const requestFiltering = (param, reverse) => {
    store.dispatch(filtersStatusChanged('active'))
    store.dispatch(paramFilterChanged(param, reverse))
}

export const requestSearch = (searchterm) => {
    store.dispatch(searchtermFilterChanged(searchterm))
}

// SELECTOR : MEMOIZED SELECTOR To allow multiple filters and derive state from employeesList state
// => will re-render list only if filter is changed
export const selectFilteredEmployees = createSelector(

    initialState => initialState.employeesList.currentList,      // input selector 1
    initialState => initialState.filters,                        // input selector 2

    (currentList, filters) => {                                  // output selector: takes both selectors as params
        
        let list = [...currentList] // ---- for 'sort()' will try to mutate currentList and fail ---- !
        // console.log('MEMOIZED SELECTOR CALLED','list===>', list)

        const { filterStatus, currentParamFilter, searchterm } = filters
        const noFilters = filterStatus === 'none'

        let listParam = currentParamFilter.param  // ex : param = 'firstName'
        const reverseOrder = currentParamFilter.reverseOrder

        if ( noFilters ) { return currentList } else {

            if (listParam) {  
                console.log('listParam in CREATE SELECTOR=', listParam)

                if ( listParam === 'state') {
                    !reverseOrder? // false (default) = ascendant order
                        list.sort( (a, b) => a[listParam].name.localeCompare(b[listParam].name))   // ( target = state.name )
                        : list.sort( (a, b) => b[listParam].name.localeCompare(a[listParam].name))
                } else { 
                    !reverseOrder ?
                        list.sort( (a, b) => a[listParam].localeCompare(b[listParam])) // a, b = employee objects of employees array
                        : list.sort( (a, b) => b[listParam].localeCompare(a[listParam])) 
                }
            }
            if (searchterm) {
                console.log('searchterm in CREATE SELECTOR=', searchterm)
                // let suggestions = searchText(searchterm, list)
            }
        }
        return list?list: currentList
    }
)