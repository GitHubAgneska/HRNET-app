import { store, pagesState, employeesListState, filteringsState } from '../state/store'
import { setEntriesPerPage, setPagesAmount, setResultsAsPages, setCurrentActivePageIndex, setCurrentActivePage } from '../state/actions/Actions'
import { useSelector } from "react-redux"
import {  selectFilteredEmployees } from './filtering-feature'
import { createSelector } from "@reduxjs/toolkit"


export const setPage = (pageNumber) => (dispatch, getState) => { 
    dispatch(setCurrentActivePageIndex(pageNumber))
    dispatch(setCurrentActivePage(pageNumber))
}


export const changeEntriesAmount = (entries) => (dispatch, getState) => { 
    dispatch(setEntriesPerPage(entries))
    const currentList = filteringsState(getState()).results; console.log('RESULTS=========>', currentList)

    store.dispatch(setResultsAsPages([])) // reset pages

    let outputPages = []
    let from = 0

    let totalPages = filteringsState(getState()).totalPages
    
    if ( !totalPages) { 
        totalPages = Math.ceil(currentList.length / entries)
        dispatch(setPagesAmount(totalPages))
    }

    // setup pages arrays
    for (let i = from; i <= totalPages; i++ ) {
        let newPageArray = []
        let to = from + entries
        newPageArray.push(currentList.slice(from, to ))
        outputPages.push(newPageArray)
        from += entries
    }
    dispatch(setResultsAsPages(outputPages))

}

export const selectCurrentPage = createSelector(
    pagesState => pagesState.resultsAsPages,
    pagesState => pagesState.currentActivePage,
    
    ( resultsAsPages, currentActivePage ) => {
        return resultsAsPages[currentActivePage]
    }  
)

// THUNK ACTION CREATOR  (used here to dispatch all pagination related actions)
// used when : first setup for default list
// then : 
export const setUpPagination = (entries, pageIndex) => (dispatch, getState) => {

        if ( entries ) { 
            dispatch(setEntriesPerPage(entries))
        
            let outputPages = []
            let from = 0
            
            const currentList = filteringsState(getState()).results; console.log('RESULTS=========>', currentList)
            let totalPages = filteringsState(getState()).totalPages
            
            if ( !totalPages) { 
                totalPages = Math.ceil(currentList.length / entries)
                dispatch(setPagesAmount(totalPages))
            }
        
            // setup pages arrays
            for (let i = from; i <= totalPages; i++ ) {
                let newPageArray = []
                let to = from + entries
                newPageArray.push(currentList.slice(from, to ))
                outputPages.push(newPageArray)
                from += entries
            }
            dispatch(setResultsAsPages(outputPages))
        }
    

        const currentPages = filteringsState(getState()).resultsAsPages
        if (pageIndex) {
            dispatch(setCurrentActivePage(currentPages[pageIndex]))
            dispatch(setCurrentActivePageIndex(pageIndex))
        } else { 
            dispatch(setCurrentActivePage(currentPages[0]))
            dispatch(setCurrentActivePageIndex(0))
        }
}



