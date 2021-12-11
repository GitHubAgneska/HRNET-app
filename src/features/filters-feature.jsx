import { createSelector } from "@reduxjs/toolkit"
import { store } from '../state/store'
import { 
    paramFilterChanged,
    filtersStatusChanged,
    searchtermFilterChanged,
    setSearchResults,
    resetSearchResults
} from '../state/actions/Actions'


export const requestFiltering = (param, reverse) => {
    store.dispatch(filtersStatusChanged('active'))
    store.dispatch(paramFilterChanged(param, reverse))
}

export const requestSearch = (searchterm) => { store.dispatch(searchtermFilterChanged(searchterm)) }
// set results in state
export const requestListAsSearchResults = (resultsOfClickedSuggestion) => { store.dispatch(setSearchResults(resultsOfClickedSuggestion)) }
// display all suggested results
export const requestSetAllSuggestionsAsResults = (suggested) => { store.dispatch(setSearchResults(suggested)) }

export const requestSearchResetting = () => { store.dispatch(resetSearchResults())}

// SELECTOR : MEMOIZED SELECTOR To allow multiple filters and derive state from employeesList state
// => will re-render list only if filter is changed
export const selectFilteredEmployees = createSelector(

    initialState => initialState.employeesList.originalList,      // input selector 1
    initialState => initialState.filters,                         // input selector 2

    (originalList, filters) => {                                  // output selector: takes both selectors as params
        
        let list;
        
        const { filterStatus, currentParamFilter, searchResults } = filters
        const noFilters = filterStatus === 'none'
                
        let listParam = currentParamFilter.param  // ex : param = 'firstName'
        const reverseOrder = currentParamFilter.reverseOrder
        
        searchResults ? // filters will either operate on original list or results of search
            list = searchResults
            : list = [...originalList] // ---- for 'sort()' will try to mutate originalList and fail ---- !

        if ( noFilters ) { // console.log('LIST noFilters OUTPUT FROM CREATE SELECTOR====', list)   ----------------------- TO REVIEW TYPEOF ...
            return list } else {

            if (listParam) {  
                // console.log('listParam in CREATE SELECTOR=', listParam)

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
            
            if (searchResults) {
                return list = [...searchResults] 
            }
        }
        // console.log('LIST OUTPUT FROM CREATE SELECTOR====', list)     ------------------------------------------------- TO REVIEW TYPEOF ≠ ... 
        return list
    }
)



