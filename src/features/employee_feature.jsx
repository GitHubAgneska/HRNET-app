import { employeeState, employeesListState, selectEmployeeState } from '../state/store'
import {  
    setEmployee, setFirstName, setLastName,setDob, setStartDate, setStreet,
    setCity, setUsState, setZipcode, setDepartment,
    employeeFetching, employeeResolved, employeeRejected
} from '../state/actions/Actions'
import { client } from '../api/client'

// Thunk function : necessary to pass id  using thunk creator
export function getEmployee(id) {
    return async(dispatch, getState) => { // returns thunk
        
        const selectEmployeeById = selectEmployeeState(id)
        const status = selectEmployeeById(getState()).status
        if ( status === 'pending' || status === 'updating' ) { return }

        dispatch(employeeFetching(id))
        try {
            const response = await client.get(`/fakeApi/employee?id=${id}`)
            const data = await response // ! NOT .json()
            console.log('EMPLOYEE WITH ID=', data)
            dispatch(employeeResolved(id, data))
        }
        catch(error) {
            dispatch(employeeRejected(id, error))
        }
    }
}

function setVoidIfUndefined(draft, id) {
    if (draft[id] === undefined) {
        draft[id] = { status: 'void' }
    }
}

