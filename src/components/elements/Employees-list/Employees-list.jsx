import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { employeesListState, filtersState } from "../../../state/store"
import { selectFilteredEmployees } from '../../../features/filters-feature'

const EmployeesList = () => {
    
    const list = useSelector(employeesListState)
    const sortedList = useSelector(selectFilteredEmployees)
    const dispatch = useDispatch()
    let sortingRequested = false

    let isSorted = false
    
    const sortListBy = (type, reversed) => { 
        sortingRequested = true

        requestFiltering(type,reversed )

    }


    if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    

    return (
        <div>
            <button onClick={sortListBy('firstName', false)}>sortBy name</button>
            { list.currentList.map( employee => (
                <div key={Math.random()}>
                    <p>{employee.firstName} {employee.lastName}</p>
                    <p>{employee.dob} - {employee.startDate}</p>
                    <p>{employee.street} - {employee.city} - {employee.state.name} - {employee.zipcode}</p>
                    <p>{employee.department}</p>
                </div>
            ))}
        </div>
    )
}
export default EmployeesList