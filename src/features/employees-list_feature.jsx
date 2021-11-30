import { employeesListState } from '../state/store'
import {  
    employeesListFetching, employeeslistResolved, employeesListRejected,
    employeesListCreateFetching, employeesListCreateResolved, employeesListCreateRejected
} from '../state/actions/Actions'
import { client } from '../api/client'
import { createAsyncThunk } from '@reduxjs/toolkit'

// Thunk functions - UNUSED ATM ---
export const fetchList = createAsyncThunk('employees-list/fetching', async () => {
    const response = await fetch('/fakeApi/employees-list')
    // const response = await client.get('/fakeApi/employees-list')
    //console.log('RESPONSE==', response)
    return JSON.parse(response)
})

// GET ----------
export async function getEmployeesCurrentList(dispatch, getState) {
    
    const status = employeesListState(getState()).get_status
    if ( status === 'pending' || status === 'updating' ) { return }
    
    dispatch(employeesListFetching())
    try {
        const response = await client.get('/fakeApi/employees-list')
        //const data = await response.json()
        const data = await response  // ! NOT .json()
        console.log('DATA=', data) // = object employees =  array of objects
        dispatch(employeeslistResolved(data))
    }
    catch (error) {
        dispatch(employeesListRejected(error))
    }
}

// POST ----------
// Thunk function : necessary to pass employee object using thunk creator
export function createEmployee(employee) {
    console.log('EMPLOYEE = ', employee)
    // first, check if exists already
    //const exists = selectEmployeeState(employee.id)
    // exists ? askEdit() : goOn()

   return async function createNewEmployeeThunk (dispatch, getState) { // returns thunk
        console.log('CALLING ASYNC ')
        const status = employeesListState(getState()).post_status
        console.log('request status when dispatch requested=', status)

    
        if ( status === 'pending' || status === 'updating ') { return }
    
        dispatch(employeesListCreateFetching(employee))

        try {
            const response = await client.post('/fakeApi/employees-list', employee )
            const data = await response
            console.log('PAYLOAD AT CREATE=', data)
            dispatch(employeesListCreateResolved(data))
        }
        catch(error) {
            dispatch(employeesListCreateRejected(error))
        }
    }
}

