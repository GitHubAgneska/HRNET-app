import { TableWrapper } from './Table_style'
import TableRow  from './Table-row'
import TableHeader from './Table-header'
import { StyledTableHeader, StyledTable } from './Table_style'

const Table = ({list, page, sortListBy}) => {
    return (
        <TableWrapper>
            <StyledTable>
                <StyledTableHeader>
                    <TableHeader sortListBy={sortListBy}/>
                </StyledTableHeader>
                <tbody>
                    <TableRow page={page} />
                    {/* <TableRow list={list} /> */}
                </tbody>
            </StyledTable>
        </TableWrapper>
    )
}

export default Table