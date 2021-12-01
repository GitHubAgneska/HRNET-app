import { createSelector } from "@reduxjs/toolkit"
import { initialState, employeesListState, filtersState, store } from '../state/store'
import { paramFilterChanged, searchtermFilterChanged, entriesFilterChanged } from '../state/actions/Actions'
import { useDispatch, useSelector } from "react-redux"


export const requestFiltering = (filterParam, reverse) => {
    store.dispatch(paramFilterChanged(filterParam, reverse))
}

// SELECTOR : MEMOIZED SELECTOR To allow multiple filters and derive state from employeesList state
// => will re-render list only if filter is changed
export const selectFilteredEmployees = createSelector(

    initialState => initialState.employeesList.currentList,   // input selector 1
    initialState => initialState.filters.currentParamFilter,  // input selector 2

    (currentList, currentParamFilter) => {                    // output selector: takes both selectors as params

        let list = [...currentList]
        console.log('MEMOIZED SELECTOR CALLED','list===>', list)

        if (currentParamFilter.param) {
            
            const listParam = currentParamFilter.param  // ex : param = 'firstName'
            console.log('listParam in CREATE SELECTOR=', listParam)
            const reverseOrder = currentParamFilter.reverseOrder
            
            if (reverseOrder) { // true = descendant order
                return list.sort( (a, b) => a[listParam].localeCompare(b[listParam])) // a, b = employee objects of employees array

            }  else {  // false (default) = ascendant order
                return list.sort( (a, b) => b[listParam].localeCompare(a[listParam]))
            }
            
        }   else { return list }
    }
)