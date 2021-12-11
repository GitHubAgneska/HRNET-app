import { initialState  } from '../store'
import { 
    FILTERS_STATUS_CHANGED, FILTER_PARAM_CHANGED, 
    FILTER_SEARCHTERM_CHANGED, SET_RESULTS_FOR_SEARCH,  RESET_SEARCH_RESULTS,
    } from '../actions/actions-types'

// ......................................................
// FILTER LIST  REDUCER
// ......................................................
// Here, the list will NOT be altered as filtered in the state,
// only filters will be marked as active, then implemented via selectors' 'instructions'
export default function filtersReducer(state = initialState.filters, action) {
    
    switch (action.type) {

        case FILTERS_STATUS_CHANGED: { 
            let status = action.payload;
            return { ...state, filterStatus: status }
        }
        case FILTER_PARAM_CHANGED: { 
            let { param, reverseOrder } = action.payload; 
            // console.log('filtersReducer===> new filter param=', param, 'reverseOrder=', reverseOrder)
            return { ...state, currentParamFilter: { param, reverseOrder } }
        }
        case FILTER_SEARCHTERM_CHANGED: {
            let newSearchterm = action.payload
            return { ...state, searchterm: newSearchterm, searchActive: true }
        }
        case SET_RESULTS_FOR_SEARCH: {
            let results = action.payload
            return { ...state,  searchResults: results }
        }
        case RESET_SEARCH_RESULTS: {
            return { ...state,  searchResults: null }
        }
        default: return state
    }
}