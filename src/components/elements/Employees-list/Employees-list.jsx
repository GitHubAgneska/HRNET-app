import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getEmployeesCurrentList } from '../../../features/employees-list_feature'
import { employeesListState } from "../../../state/store"

const EmployeesList = () => {
    
    const [currentList, setCurrentList ] = useState([])
    const dispatch = useDispatch()
    //currentList? 

    useEffect(()=> {
        dispatch(getEmployeesCurrentList)
    }, [dispatch])

    const list = useSelector(employeesListState)
    
    if ( list.get_status === 'rejected') { return <span>PB collecting list</span>}
    

    return (
        <div>
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