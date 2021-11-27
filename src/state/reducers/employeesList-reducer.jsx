import { initialState  } from '../store'
import produce from 'immer'
import {
    EMPLOYEE_CREATE_FETCHING, EMPLOYEE_CREATE_RESOLVED, EMPLOYEE_CREATE_REJECTED,
    EMPLOYEES_LIST_FETCHING, EMPLOYEES_LIST_RESOLVED, EMPLOYEES_LIST_REJECTED,
    FILTER_LIST_BY 
} from  '../actions/actions-types'

// ......................................................
// EMPLOYEES LIST  REDUCER
// ......................................................
function employeesListReducer(state = initialState.employeesList, action) {

    return produce(state, (draft) => {
        switch (action.type) {
            
            case EMPLOYEES_LIST_FETCHING: {
                if ( draft.get_status === 'void') {
                    draft.get_status = 'pending'
                    return
                }
                if (draft.get_status === 'rejected') {
                    draft.get_error = null
                    draft.get_status = 'pending'
                    return
                }
                if ( draft.get_status === 'resolved') {
                    draft.get_status = 'updating' // ongoing request but presence of data
                    return
                }
                return // else action ignored
            }

            case EMPLOYEES_LIST_RESOLVED: {
                if ( draft.get_status === 'pending' || draft.get_status === 'updating') {
                    draft.get_status = 'resolved'
                    draft.get_payload = action.payload.employees
                    draft.currentList = [...draft.currentList, ...draft.get_payload]
                    console.log('PAYLOAD TYPE==', typeof(action.payload))
                    return 
                    //draft.currentList.push(action.payload)
                }
                return // else action ignored
            }
            case EMPLOYEES_LIST_REJECTED: {
                if ( draft.get_status === 'pending' || draft.get_status === 'updating') {
                    // set to rejected, save error, delete data
                    draft.get_status = 'rejected'
                    draft.get_error = action.payload
                    draft.get_payload = null
                    return 
                    
                }
                return // else action ignored
            }


         // API REQUESTS ---------------------
            case EMPLOYEE_CREATE_FETCHING: {
                if ( draft.post_status === 'void') { 
                    draft.post_status = 'pending'
                    return
                }
                if ( draft.post_status === 'rejected') {
                    draft.post_error = null
                    draft.post_status = 'pending'
                    return
                }
                if ( draft.post_status === 'resolved') {
                    draft.post_status = 'updating' // ongoing request but presence of data
                    return
                }
                // else action ignored
                return
            }
            case EMPLOYEE_CREATE_RESOLVED: {
                if ( draft.post_status === 'pending' || draft.post_status === 'updating') {
                    draft.post_status = 'resolved'
                    draft.post_payload = action.payload
                    return draft.currentList.push(action.payload)
                }
                // else action ignored
                return
            }
            case EMPLOYEE_CREATE_REJECTED: {
                if ( draft.post_status === 'pending' || draft.post_status === 'updating') {
                    // set to rejected, save error, delete data
                    draft.post_status = 'rejected'
                    draft.post_error = action.payload
                    draft.post = null
                    return
                }
                return // else action ignored
            }
            default: return
        }
    })
}

export default employeesListReducer