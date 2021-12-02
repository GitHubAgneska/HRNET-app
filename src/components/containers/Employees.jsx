import { useSelector } from "react-redux"
import { employeesListState } from "../../state/store"
import { selectFilteredEmployees, requestFiltering } from '../../features/filters-feature'
import EmployeesList from '../elements/Employees-list/Employees-list'


const Employees = () => {

    const list = useSelector(employeesListState) // --- TO REVIEW: should not be necessary to use here
    const sortedList = useSelector(selectFilteredEmployees)

    const sortListBy = (filterParam, reverse ) => {
        console.log('filtering requested: ', filterParam, reverse)
        requestFiltering(filterParam, reverse) // call handler => modify filter state
    }

    return (
        <main>
            <h1>Current Employees list</h1>
            <EmployeesList list={list.currentList } sortedList={sortedList}  sortListBy={sortListBy} />
        </main>
    )
}

export default Employees