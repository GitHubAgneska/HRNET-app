import { employeesListState } from '../state/store'
import {  employeesListFetching, employeeslistResolved, employeesListRejected } from '../state/actions/Actions'
import { client } from '../api/client'
import { createAsyncThunk } from '@reduxjs/toolkit'

// Thunk functions - UNUSED ATM ---
export const fetchList = createAsyncThunk('employees-list/fetching', async () => {
    const response = await fetch('/fakeApi/employees-list')
    // const response = await client.get('/fakeApi/employees-list')
    //console.log('RESPONSE==', response)
    return JSON.parse(response)
})


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