import { initialState  } from '../store'
import produce from 'immer'

// ......................................................
// EMPLOYEES LIST  REDUCER
// ......................................................
function employeesListReducer(state = initialState.employeesList, action) {

    return produce(state, (draft) => {

    })
}

export default employeesListReducer