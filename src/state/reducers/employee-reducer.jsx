import { initialState  } from '../store'
import produce from 'immer'
import {
    SET_EMPLOYEE, SET_FIRSTNAME, SET_LASTNAME,
    SET_DOB, SET_STARTDATE, SET_STREET, SET_CITY,
    SET_USSTATE, SET_ZIPCODE, SET_DEPARTMENT,
    EMPLOYEE_CREATE_FETCHING, EMPLOYEE_CREATE_RESOLVED, EMPLOYEE_CREATE_REJECTED,
    EMPLOYEE_GET_FETCHING, EMPLOYEE_GET_RESOLVED, EMPLOYEE_GET_REJECTED
} from './actions-types'

// ......................................................
// EMPLOYEE  REDUCER
// ......................................................
function employeeReducer(state = initialState.employee, action) {

    return produce(state, (draft) => {
        switch (action.type) {
            case SET_EMPLOYEE: { draft.employee = action.payload; return }
            case SET_FIRSTNAME: { draft.firstName = action.payload; return }
            case SET_LASTNAME: { draft.lastName = action.payload; return}
            case SET_DOB: { draft.dob = action.payload; return }
            case SET_STARTDATE: { draft.startDate = action.payload; return }
            case SET_STREET: { draft.street = action.payload; return }
            case SET_CITY: { draft.city = action.payload; return }
            case SET_USSTATE: { draft.state = action.payload; return }
            case SET_ZIPCODE: { draft.zipcode = action.payload; return }
            case SET_DEPARTMENT: { draft.department = action.payload; return }

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
                    return
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

            case EMPLOYEE_GET_FETCHING: {
                if ( draft.get_status === 'void') { 
                    draft.get_status = 'pending'
                    return
                }
                if ( draft.get_status === 'rejected') {
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
            case EMPLOYEE_GET_RESOLVED: {
                if ( draft.get_status === 'pending' || draft.get_status === 'updating') {
                    draft.get_status = 'resolved'
                    draft.get_payload = action.payload
                    return
                }
                return // else action ignored
            }
            case EMPLOYEE_GET_REJECTED: {
                if ( draft.get_status === 'pending' || draft.get_status === 'updating') {
                    // set to rejected, save error, delete data
                    draft.get_status = 'rejected'
                    draft.get_error = action.payload
                    draft.get_payload = null
                    return
                }
                return // else action ignored
            }
             // any other case (invalid action or initialisation) : return state without modification
            default: return
        }
    })
}

export default employeeReducer