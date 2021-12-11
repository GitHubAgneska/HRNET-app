import { store, pagesState, employeesListState, filtersState } from '../state/store'
import { changeEntriesPerPage, setPagesAmount, setPages, setCurrentActivePage } from '../state/actions/Actions'
import { useSelector } from "react-redux"
import { 
    selectFilteredEmployees,
} from './filters-feature'

// THUNK ACTION CREATOR 
export const setUpPagination = (n) => (dispatch, getState) => {
        
    console.log('ENTRIES==', n)
        dispatch(changeEntriesPerPage(n))
        let outputPages = []
        let start = 0
        const currentList = useSelector(selectFilteredEmployees)
        // const currentList = await employeesListState(getState()).originalList
        try {
            let totalPages = Math.ceil(currentList.length / n);console.log('totalPages=', totalPages)
            dispatch(setPagesAmount(totalPages))
            for  (let i = start; i < totalPages; i++ ) {
                let newPageArray = []
                newPageArray.push(currentList[0])
                /* newPageArray.push(list.slice(start, start+ (n-1))) */
                outputPages.push(newPageArray)
                start+=n
            }
    
            dispatch(setPages(outputPages))
            dispatch(setCurrentActivePage(0))
        }
        catch(error) { console.error(error.message)}
            



    

}

