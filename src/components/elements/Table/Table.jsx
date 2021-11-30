import { TableWrapper } from './Table_style'
import TableRow  from './Table-row'
import TableHeader from './Table-header'
import { StyledTableHeader } from './Table_style'

const Table = ({list}) => {
    return (
        <TableWrapper>
            <table>
                <StyledTableHeader>
                    <TableHeader />
                </StyledTableHeader>
                <tbody>
                    <TableRow list={list} />
                </tbody>
            </table>
        </TableWrapper>
    )
}

export default Table