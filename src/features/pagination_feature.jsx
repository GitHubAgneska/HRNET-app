import { store, filteringsState } from '../state/store'
import { setEntriesPerPage, setPagesAmount, setResultsAsPages, setCurrentActivePageIndex, setCurrentActivePage } from '../state/actions/Actions'


// thunks dispatching multiple pagination actions

export const setPage = (pageNumber) => (dispatch, getState) => { 
    dispatch(setCurrentActivePageIndex(pageNumber))
    dispatch(setCurrentActivePage(pageNumber))
}

export const changeEntriesAmount = (entries) => (dispatch, getState) => { 
    
    dispatch(setEntriesPerPage(entries))
    const currentList = filteringsState(getState()).results; 
    // console.log('SLICE FILTERING RESULTS =========>', currentList)

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



