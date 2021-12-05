import { useSelector } from "react-redux"
import { useState } from "react"
import { employeesListState } from "../../state/store"
import { selectFilteredEmployees, requestFiltering } from '../../features/filters-feature'
import EmployeesList from '../elements/Employees-list/Employees-list'
import SearchBox from "../elements/SearchBox/SearchBox"

const Employees = () => {

    // SORT LIST
    const list = useSelector(employeesListState) // --- TO REVIEW: should not be necessary to use here
    const sortedList = useSelector(selectFilteredEmployees)

    const sortListBy = (filterParam, reverse ) => {
        // console.log('filtering requested: ', filterParam, reverse)
        requestFiltering(filterParam, reverse) // call handler => modify filter state
    }

    // SEARCH LIST
    const [ searchInputValues, setSearchInputValues ] = useState("")
    
    const handleSearchChange = e => { setSearchInputValues(e.target.value); console.log('SET searchInputValues==', searchInputValues)}

    const clearInput = () => {
        let input = document.querySelector('input')
        if ( input.value !== "" ) { 
            setSearchInputValues("")
            input.value = "" 
        } else return
        
        console.log('values after clear=',searchInputValues ) // -- not empty at first: why ?
    }

    const handleSearchSubmit = () => { console.log('to submit :', searchInputValues); }

    return (
        <main>
            <h1>Current Employees list</h1>
            <SearchBox 
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
                clearInput={clearInput}
                values={searchInputValues}
            />
            <EmployeesList list={list.currentList } sortedList={sortedList}  sortListBy={sortListBy} />
        </main>
    )
}

export default Employees