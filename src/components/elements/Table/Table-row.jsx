import { Fragment } from "react"
import {StyledTableRow } from './Table_style'

const TableRow = ({list}) => {
    return (
        <Fragment>
            { list.map( employee => (
                
                <StyledTableRow key={Math.random()}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.dob}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.street}</td>
                    <td>{employee.city}</td>
                    <td>{employee.state.name}</td>
                    <td>{employee.zipcode}</td>
                    <td>{employee.department}</td>
                </StyledTableRow>
                ))
            }
        </Fragment>
    )
}

export default TableRow