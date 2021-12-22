import { initialState } from '../store'
import { 
    FILTERS_STATUS_CHANGED, FILTER_PARAM_CHANGED, 
    FILTER_SEARCHTERM_CHANGED, SET_RESULTS_FOR_SEARCH,  RESET_SEARCH_RESULTS,
    } from '../actions/actions-types'

// ......................................................
// FILTER LIST  REDUCER
// ......................................................
// Here, the list will NOT be altered as filtered in the state,
// only filtering will be marked as active, then implemented via selectors' 'instructions'
export default function filteringReducer(state = initialState.filtering, action) {
    
    switch (action.type) {

        case FILTERS_STATUS_CHANGED: { 
            let status = action.payload;
            return { ...state, sortingStatus: status }
        }
        case FILTER_PARAM_CHANGED: { 
            let { param, reverseOrder } = action.payload; 
            // console.log('filtersReducer===> new filter param=', param, 'reverseOrder=', reverseOrder)
            return { ...state, currentSortingParam: { param, reverseOrder } }
        }
        case FILTER_SEARCHTERM_CHANGED: {
            let newSearchterm = action.payload
            return { ...state, searchterm: newSearchterm, searchActive: true }
        }
        case SET_RESULTS_FOR_SEARCH: {
            let results = action.payload
            console.log('3 - FILTERING REDUCER ==> - SET_RESULTS_FOR_SEARCH OR SORTING  ==> NOW'  )
            return { ...state,  results: results }
        }
        case RESET_SEARCH_RESULTS: {
            return { ...state,  results: null }
        }
        default: return state
    }
}