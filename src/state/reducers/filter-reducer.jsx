import { initialState  } from '../store'
import { FILTER_PARAM_CHANGED, FILTER_SEARCHTERM_CHANGED, FILTER_ENTRIES_AMOUNT_CHANGED } from '../actions/actions-types'

// ......................................................
// FILTER LIST  REDUCER
// ......................................................
// Here, the list will NOT be altered as filtered in the state,
// only filters will be marked as active, then implemented via selectors' 'instructions'
export default function filtersReducer(state = initialState.filters, action) {
    
    switch (action.type) {
        
        // user clicks sort list by <param>
        case FILTER_PARAM_CHANGED: {
            // retrieve new param ( ex: 'byName')
            let { param, reverseOrder } = action.payload; console.log('new list filter param=', param, reverseOrder)
            
            // new param will always operate on unsorted list (employeesListState remains unchanged) so no need to re-init initial list
            return {
                ...state,
                currentParamFilter: { param, reverseOrder }
            }
        }
        // user enters chars in search field: new search term passed to filters state
        case FILTER_SEARCHTERM_CHANGED: {
            let newSearchterm = action.payload
            return { ...state, searchterm: newSearchterm }
        }
        // user changes entries amount to display
        case FILTER_ENTRIES_AMOUNT_CHANGED: {
            let newAmount = action.payload
            return { ...state, entries: newAmount }
        }
        default: return state
    }
}