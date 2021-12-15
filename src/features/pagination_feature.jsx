import { store, pagesState, employeesListState, filtersState } from '../state/store'
import { changeEntriesPerPage, setPagesAmount, setPages, setCurrentActivePageIndex, setCurrentActivePage } from '../state/actions/Actions'
import { useSelector } from "react-redux"
import {  selectFilteredEmployees } from './filters-feature'
import { createSelector } from "@reduxjs/toolkit"


// memoized selector to retrieve all IDs from current list of results
export const selectAllCurrentEmployeesIds = createSelector (
    filtersState => filtersState.searchResults,
    searchResults => searchResults?.map(result => result.id)
)


// THUNK ACTION CREATOR  (used here to dispatch multiple actions)
export const setUpPagination = (n) => async (dispatch, getState) => {
        
        console.log('ENTRIES==', n)
        dispatch(changeEntriesPerPage(n))

        let outputPages = []
        let start = 0
        
        const currentList = await filtersState(getState()).searchResults // needs to wait for initial fetch to be resolved =>  = default search results

        if ( currentList) {
            let totalPages = Math.ceil(currentList.length / n);
            console.log('totalPages=', totalPages)
    
            dispatch(setPagesAmount(totalPages))
            
            for (let i = start; i < totalPages; i++ ) {
                let newPageArray = []
                
                newPageArray.push(currentList.slice(start, start+ (n-1)))
                outputPages.push(newPageArray)
                start+=n
            }
            dispatch(setPages(outputPages))
            dispatch(setCurrentActivePage(outputPages[0]))
            dispatch(setCurrentActivePageIndex(0))
        }
}

export const selectCurrentPage = createSelector(
    pagesState => pagesState.pagesArray,
    pagesState => pagesState.currentActivePage,
    
    ( pagesArray, currentActivePage ) => {
        return pagesArray[currentActivePage]
    }  
)

