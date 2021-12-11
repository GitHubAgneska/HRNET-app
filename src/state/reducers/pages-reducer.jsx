import { initialState  } from '../store'
import {
    ENTRIES_AMOUNT_CHANGED,
    SET_PAGES_AMOUNT,
    SET_PAGES,
    SET_CURRENTACTIVE_PAGE,
    SETUP_PAGINATION 
} from '../actions/actions-types'

// ......................................................
// PAGINATION REDUCER
// ......................................................
export default function PagesReducer(state = initialState.pages, action) {

    switch (action.type) {

       /*  case ENTRIES_AMOUNT_CHANGED: {
            let newAmount = action.payload;
            return { ...state, entries: newAmount }
        }
        case SET_PAGES_AMOUNT: {
            let newPagesAmount = action.payload;
            return { ...state, totalPages: newPagesAmount }
        }
        case SET_PAGES: {
            let pages = action.payload
            return { ...state, pages: pages }
        }
        case SET_CURRENTACTIVE_PAGE: {
            let pageRequested = action.payload
            return { ...state, currentActivePage: pageRequested }
        } */
        case  SETUP_PAGINATION : {
            let newAmount = action.payload;
            
        }
        default: return state
    }
}