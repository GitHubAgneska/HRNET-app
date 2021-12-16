import { store, pagesState, employeesListState, filteringsState } from '../state/store'
import { setEntriesPerPage, setPagesAmount, setResultsAsPages, setCurrentActivePageIndex, setCurrentActivePage } from '../state/actions/Actions'
import { useSelector } from "react-redux"
import {  selectFilteredEmployees } from './filtering-feature'
import { createSelector } from "@reduxjs/toolkit"


// THUNK ACTION CREATOR  (used here to dispatch all pagination related actions)
export const setUpPagination = (n) => (dispatch, getState) => {
        
        console.log('ENTRIES==', n)
        dispatch(setEntriesPerPage(n))

        let outputPages = []
        let start = 0
        
        const currentList = filteringsState(getState()).results // needs to wait for initial fetch to be resolved =>  = default search results
        console.log('CURRENT LIST AT SET UP PAGINATION==', currentList)
        
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
            dispatch(setResultsAsPages(outputPages))
            dispatch(setCurrentActivePage(outputPages[0]))
            dispatch(setCurrentActivePageIndex(0))
        }
}

export const selectCurrentPage = createSelector(
    pagesState => pagesState.resultsAsPages,
    pagesState => pagesState.currentActivePage,
    
    ( resultsAsPages, currentActivePage ) => {
        return resultsAsPages[currentActivePage]
    }  
)

