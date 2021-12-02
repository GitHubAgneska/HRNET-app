import { createSelector } from "@reduxjs/toolkit"
import { initialState, employeesListState, filtersState, store } from '../state/store'
import { paramFilterChanged,filtersStatusChanged, searchtermFilterChanged, entriesFilterChanged } from '../state/actions/Actions'


export const requestFiltering = (param, reverse) => {
    store.dispatch(filtersStatusChanged('active'))
    store.dispatch(paramFilterChanged(param, reverse))
}

// SELECTOR : MEMOIZED SELECTOR To allow multiple filters and derive state from employeesList state
// => will re-render list only if filter is changed
export const selectFilteredEmployees = createSelector(

    initialState => initialState.employeesList.currentList,   // input selector 1
    initialState => initialState.filters,  // input selector 2

    (currentList, filters) => {                    // output selector: takes both selectors as params
        
        let list = [...currentList] // ---- for 'sort()' will try to mutate currentList and fail ---- !
        // console.log('MEMOIZED SELECTOR CALLED','list===>', list)

        const { filterStatus, currentParamFilter } = filters
        const noFilters = filterStatus === 'none'

        let listParam = currentParamFilter.param  // ex : param = 'firstName'
        const reverseOrder = currentParamFilter.reverseOrder

        if ( noFilters ) { return currentList } else {

            if (listParam) {  
                console.log('listParam in CREATE SELECTOR=', listParam)

                if ( listParam === 'state') { listParam =  listParam.name }
                
                if (!reverseOrder) { // true = descendant order
                    return list.sort( (a, b) => a[listParam].localeCompare(b[listParam])) // a, b = employee objects of employees array
                }  
                else {  // false (default) = ascendant order
                    // console.log('SORTED===',list.sort( (a, b) => b[listParam].localeCompare(a[listParam])))
                    return list.sort( (a, b) => b[listParam].localeCompare(a[listParam]))
                    //return currentList.filter(e => e.department === 'sales')
                }
            }
        }
        return list?list: currentList
    }
)