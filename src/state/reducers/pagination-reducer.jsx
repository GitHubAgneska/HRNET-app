import { initialState } from '../store'
import {
    SET_ENTRIES_AMOUNT,
    SET_PAGES_AMOUNT,
    SET_RESULTS_AS_PAGES,
    SET_CURRENTACTIVE_PAGE_INDEX,
    SET_CURRENTACTIVE_PAGE
} from '../actions/actions-types'

// ......................................................
// PAGINATION REDUCER
// ......................................................
export default function PaginationReducer(state = initialState.pagination, action) {

    switch (action.type) {

        case SET_ENTRIES_AMOUNT: {
            let newAmount = action.payload;
            return { ...state, entries: newAmount }
        }
        case SET_PAGES_AMOUNT: {
            let newPagesAmount = action.payload;
            console.log('PAYLOAD PAGES=====', newPagesAmount)
            return { ...state, totalPages: newPagesAmount }
        }
        case SET_RESULTS_AS_PAGES: {
            let pages = action.payload
            return { ...state, resultsAsPages: pages }
        }
        case SET_CURRENTACTIVE_PAGE_INDEX: {
            let pageRequested = action.payload
            return { ...state, currentActivePageIndex: pageRequested }
        }
        case SET_CURRENTACTIVE_PAGE: {
            let activePage = action.payload
            return { ...state, currentActivePage: activePage }
        }
        default: return state
    }
}