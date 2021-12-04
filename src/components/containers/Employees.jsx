import { useSelector } from "react-redux"
import { employeesListState } from "../../state/store"
import { selectFilteredEmployees, requestFiltering } from '../../features/filters-feature'
import EmployeesList from '../elements/Employees-list/Employees-list'
import SearchBox from "../elements/SearchBox/SearchBox"

const Employees = () => {

    const list = useSelector(employeesListState) // --- TO REVIEW: should not be necessary to use here
    const sortedList = useSelector(selectFilteredEmployees)

    const sortListBy = (filterParam, reverse ) => {
        // console.log('filtering requested: ', filterParam, reverse)
        requestFiltering(filterParam, reverse) // call handler => modify filter state
    }
    const handleSearchChange = (value) => { console.log('input changed:', value); }
    const handleSearchSubmit = (value) => { console.log('to submit :', value); }

    return (
        <main>
            <h1>Current Employees list</h1>
            <SearchBox handleSearchChange={handleSearchChange}  handleSearchSubmit={handleSearchSubmit} />
            <EmployeesList list={list.currentList } sortedList={sortedList}  sortListBy={sortListBy} />
        </main>
    )
}

export default Employees