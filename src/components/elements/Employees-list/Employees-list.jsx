import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { employeesListState, filtersState } from "../../../state/store"
import { selectFilteredEmployees, requestFiltering } from '../../../features/filters-feature'
import Table from '../Table/Table'

const EmployeesList = () => {
    
    useEffect(() => {
        
    }, [])

    let list = useSelector(employeesListState)
    
    const sortedList = useSelector(selectFilteredEmployees)
    const listToDisplay = sortedList??[]


    const sortListBy = (filterParam, reverse ) => {
        console.log('filtering requested: ', filterParam, reverse)
        requestFiltering(filterParam, reverse) // call handler => modify filter state
    }

    if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    if ( list.get_status === 'pending') { return <span>LOADING</span>}
    
    return (
        <div>
            <button onClick={() => sortListBy('firstName', false)}>sortBy name</button>
            <button onClick={() => sortListBy('department', false)}>sortBy department</button>
            
            { listToDisplay &&  <Table list={listToDisplay} /> }
            { ! listToDisplay &&  <Table list={list.currentList} /> }

        </div>
    )
}
export default EmployeesList