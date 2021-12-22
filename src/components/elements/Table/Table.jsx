import TableRow  from './Table-row'
import TableHeader from './Table-header'
import { TableWrapper, StyledTableHeader, StyledTable } from './Table_style'
import { useState } from 'react'


const Table = ({currentPageToDisplay, sortListBy}) => {

    return (
        <TableWrapper>
            <StyledTable>
                <StyledTableHeader>
                    <TableHeader sortListBy={sortListBy}/>
                </StyledTableHeader>
                <tbody>
                    { currentPageToDisplay && currentPageToDisplay.map( employee => (
                        <TableRow key={Math.random()} employee={employee} /> ))
                    } 
                </tbody>
            </StyledTable>
        </TableWrapper>
    )
}

export default Table