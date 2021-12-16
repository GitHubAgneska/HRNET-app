import { Fragment } from "react"
import {StyledTableRow } from './Table_style'
import moment from 'moment'

const TableRow = ({list, item}) => {
    //if (list.constructor.name !== "Array") { list = list.employees} // --- dirty workaround -- should use NORMALIZED DATA
    
    return (
        <Fragment>

            { item && item.map( employee => (
           /*  { list.map( employee => ( */
                
                <StyledTableRow key={Math.random()}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{moment(employee.dob).format('MM/DD/YY')}</td>
                    <td>{moment(employee.startDate).format('MM/DD/YY')}</td>
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