import { listState, initialState } from '../state/store'
import { 
    listFetching, listResolved, listRejected,
    setCollection,
    setEntriesPerPage, setTotalPages,
    setCurrentActivePage, setCurrentActivePageIndex,
    setCollectionAsPages

} from '../state/actions/Actions'
import { client } from '../api/client'

export const selectAllList = initialState => initialState.list.data
export const selectCollection = initialState => initialState.list.collection
export const selectCollectionAsPages =  initialState => initialState.list.collectionAsPages

// ......................................................
// FETCH
// ......................................................
export async function fetchList(dispatch, getState) { // rtk = createAsyncThunk
    
    const status = listState(getState()).get_status
    if ( status === 'pending' || status === 'loading' ) { return }
    
    dispatch(listFetching())

    try {
        const response = await client.get('/fakeApi/employees-list')
        const data = await response
        dispatch(listResolved(data))
        dispatch(setCollection(data.employees))   // set default collection to all list
        dispatch(changeEntriesAmount(50))
    }
    catch (error) {
        dispatch(listRejected(error))
    }
}
// ......................................................
// SET UP PAGINATION : thunks dispatching multiple pagination actions
// ......................................................
export const setPage = (pageNumber) => (dispatch, getState) => { 
    dispatch(setCurrentActivePageIndex(pageNumber))
    dispatch(setCurrentActivePage(pageNumber))
}


export const changeEntriesAmount = (entries) => (dispatch, getState) => { 
    
    dispatch(setEntriesPerPage(entries))

    const currentList = listState(getState()).collection; // console.log('CURRENTLIST COLLECTION WHEN SET COLLECTION AS PAGES (SET PAGE(entries))=========>', currentList)
    const currentActivePageIndex = listState(getState()).currentPageIndex
    
    let outputPages = []
    let from = 0
    let totalPages = Math.ceil(currentList.length / entries)
    dispatch(setTotalPages(totalPages))
    
    // setup pages arrays
    for (let i = from; i <= totalPages; i++ ) {
        let to = from + entries
        outputPages.push(currentList.slice(from, to ))
        from += entries
    }

    // set current page to default only if unset (otherwise keep current page after rearranging after entries amount changed)
    if ( !currentActivePageIndex ) {  dispatch(setCurrentActivePageIndex(1)) }


    dispatch(setCollectionAsPages(outputPages))
   
}