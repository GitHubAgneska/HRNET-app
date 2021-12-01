import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { employeesListState, filtersState } from "../../../state/store"
import { selectFilteredEmployees, requestFiltering } from '../../../features/filters-feature'
import Table from '../Table/Table'

const EmployeesList = () => {
    
    const [ isSorted, setSortingRequested]= useState(false)
    const dispatch = useDispatch()
    let list = useSelector(employeesListState)
    let filters = useSelector(filtersState)
    // console.log('LIST at component init ==', list)

    const isFilteringActive = useSelector(state => state.filters.none === false )

   // const sortedList = useSelector(selectFilteredEmployees)

    const sortListBy = (filterParam, reverse ) => {
        console.log('filtering requested: ', filterParam, reverse)
        setSortingRequested(true)
        requestFiltering(filterParam, reverse) // call handler => modify filter state

        
    }

    if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    if ( list.get_status === 'pending') { return <span>LOADING</span>}
    
    return (
        <div>
            <button onClick={() => sortListBy('firstName', false)}>sortBy name</button>
            <Table list={list.currentList} />

            
            {/* { list.currentList.map( employee => (
                    <div key={Math.random()}>
                        <p>{employee.firstName} {employee.lastName}</p>
                        <p>{employee.dob} - {employee.startDate}</p>
                        <p>{employee.street} - {employee.city} - {employee.state.name} - {employee.zipcode}</p>
                        <p>{employee.department}</p>
                    </div>
                ))
            } */}


        </div>
    )
}
export default EmployeesList