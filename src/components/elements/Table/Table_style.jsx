import styled from "styled-components"

export const TableWrapper = styled.div`
    display: flex;
    height: 90%;
    border: 2px solid grey;
    overflow: scroll;
`

export const StyledTable = styled.table` 
    /* border-collapse: collapse; */
    width: 100%;
`

export const StyledTableHeader = styled.thead`
    /* position: fixed; width: 100%; z-index: 2; */
    min-height: 2rem;
    text-transform: capitalize;
    th { color: white; background-color: #ccc }
    
`

export const TableHeaderIconWrapper = styled.div`
    min-height: 1rem;
    
`

export const StyledTableRow = styled.tr`
    border-bottom: 1px solid black;
    :nth-child(even) {background-color: #ccc }

`

