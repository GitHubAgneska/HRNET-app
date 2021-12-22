import TableRow  from './Table-row'
import TableHeader from './Table-header'
import { TableWrapper, StyledTableHeader, StyledTable } from './Table_style'


const Table = ({list, page, sortListBy}) => {
    return (
        <TableWrapper>
            <StyledTable>
                <StyledTableHeader>
                    <TableHeader sortListBy={sortListBy}/>
                </StyledTableHeader>
                <tbody>
                { page && page.map( item => (
                    <TableRow key={Math.random()} item={item} />))
                } 
                {/* <TableRow list={list} /> */}
                </tbody>
            </StyledTable>
        </TableWrapper>
    )
}

export default Table