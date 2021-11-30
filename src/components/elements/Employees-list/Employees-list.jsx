import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { employeesListState, filtersState } from "../../../state/store"
import { selectFilteredEmployees, requestFiltering } from '../../../features/filters-feature'
import Table from '../Table/Table'

const EmployeesList = () => {
    
    const dispatch = useDispatch()
    let list = useSelector(employeesListState)
    let sortingRequested = false
    let isSorted = false
    
    const sortListBy = async (filterParam, reverse ) => {
        console.log('filtering requested: ', filterParam, reverse)
        sortingRequested = true
        requestFiltering(filterParam, reverse) // call handler for action dispatching
        isSorted = true
        dispatch(selectFilteredEmployees)
    }

    const sortedList = useSelector(selectFilteredEmployees)
    console.log('SORTED LIST==', sortedList)

    if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    
    

    return (
        <div>
            <button onClick={() => sortListBy('firstName', false)}>sortBy name</button>
            

            {/* { list.currentList.map( employee => (
                    <div key={Math.random()}>
                        <p>{employee.firstName} {employee.lastName}</p>
                        <p>{employee.dob} - {employee.startDate}</p>
                        <p>{employee.street} - {employee.city} - {employee.state.name} - {employee.zipcode}</p>
                        <p>{employee.department}</p>
                    </div>
                ))
            } */}
            <Table list={list.currentList} />


        </div>
    )
}
export default EmployeesList