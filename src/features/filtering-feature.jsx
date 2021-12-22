import { createSelector } from "@reduxjs/toolkit"
import { store, filteringsState } from '../state/store'
import { 
    paramFilterChanged,
    filtersStatusChanged,
    searchtermFilterChanged,
    setSearchResults,
    resetSearchResults
} from '../state/actions/Actions'


// SEARCH BY - actions creators
export const requestSearch = (searchterm) => { store.dispatch(searchtermFilterChanged(searchterm)) }
// set results in state
export const requestListAsSearchResults = (resultsOfClickedSuggestion) => { store.dispatch(setSearchResults(resultsOfClickedSuggestion)) }
// display all suggested results
export const requestSetAllSuggestionsAsResults = (suggested) => { store.dispatch(setSearchResults(suggested)) }

export const requestSearchResetting = () => { store.dispatch(resetSearchResults())}


// SORT BY - actions creators
export const requestFiltering = (param, reverse) => {
    store.dispatch(filtersStatusChanged('active'))
    store.dispatch(paramFilterChanged(param, reverse))
}    

// -  memoized selector: display list as sorted by ( = results derived state ) 
// ISSUE => as derived state, is never stored in state as is, 
// therefore CANNOT be used by pagination feature that feeds on results from state !
export const showListSortedBy = createSelector(
    
    initialState => initialState.filtering.results,
    initialState => initialState.filtering,
    
        (results, filtering ) => {
            
            const { sortingStatus, currentSortingParam  } = filtering
            
            const noFilters = sortingStatus === 'none' 
            const listParam = currentSortingParam.param  // ex : param = 'firstName'
            const reverseOrder = currentSortingParam.reverseOrder

            if ( noFilters ) { return results  }
            
            let sortedList = [ ...results] // ---- for 'sort()' will try to mutate 'results' and fail ---- !
            if (listParam) {

                if ( listParam === 'state') {
                    !reverseOrder?
                        sortedList.sort( (a, b) => a[listParam].name.localeCompare(b[listParam].name))   // ( target = state.name )
                        : sortedList.sort( (a, b) => b[listParam].name.localeCompare(a[listParam].name))
                } else { 
                    !reverseOrder ?
                        sortedList.sort( (a, b) => a[listParam].localeCompare(b[listParam])) // a, b = employee objects of employees array
                        : sortedList.sort( (a, b) => b[listParam].localeCompare(a[listParam])) 
                }
            }
            return sortedList
    }
)

// thunk replacing previous selector 
// => role = to process sorting if any then STORE current list as sorted/unsorted in state, so it can be paginated
export const showListSortedBy2 = () => (dispatch, getState) => {

    const currentList = filteringsState(getState()).results; 

    const { sortingStatus, currentSortingParam }  = filteringsState(getState())
    const noFilters = sortingStatus === 'none' 
    const listParam = currentSortingParam.param  // ex : param = 'firstName'
    const reverseOrder = currentSortingParam.reverseOrder

    if ( noFilters ) { return } // 
    let sortedList = [ ...currentList] // ---- for 'sort()' will try to mutate 'results' and fail ---- !
    
    if (listParam) {

        if ( listParam === 'state') {
            !reverseOrder?
                sortedList.sort( (a, b) => a[listParam].name.localeCompare(b[listParam].name))   // ( target = state.name )
                : sortedList.sort( (a, b) => b[listParam].name.localeCompare(a[listParam].name))
        } else { 
            !reverseOrder ?
                sortedList.sort( (a, b) => a[listParam].localeCompare(b[listParam])) // a, b = employee objects of employees array
                : sortedList.sort( (a, b) => b[listParam].localeCompare(a[listParam])) 
        }
        dispatch(requestListAsSearchResults(sortedList)) // makes current sorted
    }

}

