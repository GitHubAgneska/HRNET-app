import { employeesListState } from '../state/store'
import {  employeesListFetching, employeeslistResolved, employeesListRejected } from '../state/actions/Actions'
import { client } from '../api/client'

export async function getEmployeesCurrentList(dispatch, getState) {
    const status = employeesListState(getState()).get_status
    if ( status === 'pending' || status === 'updating' ) {
        return
    }
    dispatch(employeesListFetching())
    try {
        //const response = await fetch('/fakeApi/employees-list')
        const response = await client.get('/fakeApi/employees-list')
        const data = await response.json()
        console.log('DATA=', data)
        dispatch(employeeslistResolved(data))
    }
    catch (error) {
        dispatch(employeesListRejected(error))
    }
}