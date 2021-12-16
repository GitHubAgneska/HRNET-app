import { initialState  } from '../store'
import produce from 'immer'
import {
    EMPLOYEES_LIST_CREATE_FETCHING, EMPLOYEES_LIST_CREATE_RESOLVED, EMPLOYEES_LIST_CREATE_REJECTED,
    EMPLOYEES_LIST_FETCHING, EMPLOYEES_LIST_RESOLVED, EMPLOYEES_LIST_REJECTED
} from  '../actions/actions-types'
import uuid from "uuid" 
// ......................................................
// EMPLOYEES LIST  REDUCER
// ......................................................
export default function  employeesListReducer(state = initialState.employeesList, action) {

    return produce(state, (draft) => {
        switch (action.type) {
            
            // GET REQUEST ---------------------
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
                    draft.originalList = [...draft.originalList, ...draft.get_payload]
                    // console.log('PAYLOAD TYPE==', typeof(action.payload))
                    return 
                    //draft.originalList.push(action.payload)
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


            // POST REQUEST ---------------------
            case EMPLOYEES_LIST_CREATE_FETCHING: {
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
            case EMPLOYEES_LIST_CREATE_RESOLVED: {
                // console.log('EMPLOYEE_CREATE_RESOLVED ACTION CALLED')
                if ( draft.post_status === 'pending' || draft.post_status === 'updating') {
                    draft.post_status = 'resolved'
                    draft.post_payload = action.payload
                    let newEmployee = action.payload
                    let newId = uuid.v4()
                    newEmployee.id = newId
                    draft.originalList.push(newEmployee)
                    return
                }
                // else action ignored
                return
            }
            case EMPLOYEES_LIST_CREATE_REJECTED: {
                if ( draft.post_status === 'pending' || draft.post_status === 'updating') {
                    // set to rejected, save error, delete data
                    draft.post_status = 'rejected'
                    draft.post_error = action.payload
                    draft.post_payload = null
                    return
                }
                return // else action ignored
            }
            default: return
        }
    })
}
