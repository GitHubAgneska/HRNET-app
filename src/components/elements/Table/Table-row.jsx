import { Fragment } from "react"


const TableRow = ({list}) => {
    return (
        <Fragment>
            { list.map( employee => (
                
                <tr key={Math.random()}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.dob}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.street}</td>
                    <td>{employee.city}</td>
                    <td>{employee.state.name}</td>
                    <td>{employee.zipcode}</td>
                    <td>{employee.department}</td>
                </tr>
                ))
            }
        </Fragment>
    )
}

export default TableRow