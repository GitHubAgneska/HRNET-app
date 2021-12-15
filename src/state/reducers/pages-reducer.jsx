import { initialState  } from '../store'
import {
    ENTRIES_AMOUNT_CHANGED,
    SET_PAGES_AMOUNT,
    SET_PAGES,
    SET_CURRENTACTIVE_PAGE_INDEX,
    SET_CURRENTACTIVE_PAGE
} from '../actions/actions-types'

// ......................................................
// PAGINATION REDUCER
// ......................................................
export default function PagesReducer(state = initialState.pages, action) {

    switch (action.type) {

        case ENTRIES_AMOUNT_CHANGED: {
            let newAmount = action.payload;
            return { ...state, entries: newAmount }
        }
        case SET_PAGES_AMOUNT: {
            let newPagesAmount = action.payload;
            console.log('PAYLOAD PAGES=====', newPagesAmount)
            return { ...state, totalPages: newPagesAmount }
        }
        case SET_PAGES: {
            let pagesArray = action.payload
            return { ...state, pagesArray: pagesArray }
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