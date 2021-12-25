import { listState } from '../state/store'
import {  
    setEmployee, setFirstName, setLastName,setDob, setStartDate, setStreet,
    setCity, setUsState, setZipcode, setDepartment,
    employeeFetching, employeeResolved, employeeRejected,
    setCollection,
    createEmployeeFetching, createEmployeeResolved, createEmployeeRejected
} from '../state/actions/Actions'
import { client } from '../api/client'
import { changeEntriesAmount } from './list_feature'

// Thunk function : necessary to pass id  using thunk creator
/* export function getEmployee(id) {
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
} */

function setVoidIfUndefined(draft, id) {
    if (draft[id] === undefined) {
        draft[id] = { status: 'void' }
    }
}

// POST ----------
// Thunk function : necessary to pass employee object using thunk creator
export function createEmployee(employee) {
   // console.log('EMPLOYEE = ', employee)
    // first, check if exists already
    //const exists = selectEmployeeState(employee.id)
    // exists ? askEdit() : goOn()

   return async function createNewEmployeeThunk (dispatch, getState) { // returns thunk
        
        const status = listState(getState()).post_status
        if ( status === 'pending' || status === 'updating ') { return }
        
        const collection = listState(getState()).collection

        dispatch(createEmployeeFetching(employee))

        try {
            const response = await client.post('/fakeApi/employees-list', employee )
            const data = await response
            dispatch(createEmployeeResolved(data))
            dispatch(setCollection([...collection, data]))
            dispatch(changeEntriesAmount(15))      
        }
        catch(error) {
            dispatch(createEmployeeRejected(error))
        }
    }
}

