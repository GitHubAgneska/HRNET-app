import { Fragment } from "react"
import {StyledTableRow } from './Table_style'
import moment from 'moment'

const TableRow = ({employee}) => {
    const currentQuery = useSelector(initialState => initialState.list.searchTerm)

    return (
        <Fragment>         
            <StyledTableRow key={Math.random()}>
                <td className={}>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{moment(employee.dob).format('MM/DD/YY')}</td>
                <td>{moment(employee.startDate).format('MM/DD/YY')}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state.name}</td>
                <td>{employee.zipcode}</td>
                <td>{employee.department}</td>
            </StyledTableRow>
        </Fragment>
    )
}

export default TableRow