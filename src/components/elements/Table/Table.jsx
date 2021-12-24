//import TableRow  from './Table-row'
import TableHeader from './Table-header'
import { TableWrapper, StyledTableHeader, StyledTable, StyledTableRow, highlighted } from './Table_style'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Table = ({currentPageToDisplay, sortListBy}) => {

    const currentQuery = useSelector(initialState => initialState.list.searchTerm)
    const [ highlighted, setHighlighted ] = useState(false)

    const tableHead = [ 'firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department']

    const tableRow = employee => {
        const { key, value } = employee
        const tableCell = [...tableHead]
        
        const columnData = tableCell.map( prop => {
            let valueToDisplay
            if ( key[prop].hasOwnProperty('name') ) { valueToDisplay = key[prop]['name'] }
            else if ( prop === 'dob' || prop ==='startDate') { valueToDisplay = moment(key[prop]).format('MM/DD/YY') }
            else { valueToDisplay = key[prop] }
    
            if (currentQuery && valueToDisplay.toLowerCase().includes(currentQuery)  ) { console.log('MATCH!'); setHighlighted(true) }

            return (<td key={Math.random()} style={{backgroundColor:highlighted?'yellow':'none'}} >{valueToDisplay}</td>) 
        })        
        return (<StyledTableRow key={Math.random()}>{columnData}</StyledTableRow>)
    }

    const tableData = () => { return currentPageToDisplay.map((key, index) => tableRow({key, index}))  }

    return (
        <TableWrapper>
            <StyledTable>
                <StyledTableHeader>
                    <TableHeader sortListBy={sortListBy}/>
                </StyledTableHeader>
                <tbody>{tableData()}</tbody>    
            </StyledTable>
        </TableWrapper>
    )
}

export default Table