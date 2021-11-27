import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getEmployeesCurrentList } from '../../../features/employees-list_feature'
import { employeesListState } from "../../../state/store"

const EmployeesList = () => {
    
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getEmployeesCurrentList)
    }, [dispatch])

    const list = useSelector(employeesListState)
    if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    

    return (
        <div>
            { list.currentList.map( employee => (
                <div key={Math.random()}>
                    <p>{employee.firstName}</p>
                    <p>{employee.lastName}</p>
                </div>
            ))}
        </div>
    )
}
export default EmployeesList