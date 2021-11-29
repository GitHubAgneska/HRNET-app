import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { employeesListState, filtersState } from "../../../state/store"
import { selectFilteredEmployees, requestFiltering } from '../../../features/filters-feature'

const EmployeesList = () => {
    
    const list = useSelector(employeesListState)

    let sortingRequested = false
    let isSorted = false
    
    const sortListBy = (type, reversed) => {
        console.log('filtering requested: ', type, reversed)
        sortingRequested = true
        requestFiltering(type,reversed) // call handler for  action dispatching
        isSorted = true;
        console.log('sortedList=', sortedList)
        
    }

    const sortedList = useSelector(selectFilteredEmployees)


    if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    

    return (

        <div>
            <button onClick={() => sortListBy('firstName', false)}>sortBy name</button>
            
            { list.currentList.map( employee => (
                    <div key={Math.random()}>
                        <p>{employee.firstName} {employee.lastName}</p>
                        <p>{employee.dob} - {employee.startDate}</p>
                        <p>{employee.street} - {employee.city} - {employee.state.name} - {employee.zipcode}</p>
                        <p>{employee.department}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default EmployeesList