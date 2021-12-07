import styled from "styled-components"

export const TableWrapper = styled.div`
    display: flex;
    height: 90%;
    overflow: scroll;
    /* border: 2px solid grey; */
`

export const StyledTable = styled.table` 
    /* border-collapse: collapse; */
    width: 100%;
`

export const StyledTableHeader = styled.thead`
    min-height: 2rem;
    text-transform: capitalize;
    th {
        height: 3.5rem;
        position: sticky; top: 0; 
        color: white; 
        background-color: #888; 
        /* box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.8); */
     }
`

export const TableHeaderIconWrapper = styled.div`
    min-height: 1rem;
    
`

export const StyledTableRow = styled.tr`
    height: 2rem;
    

    :nth-child(even) {background-color: #ccc }
    &:hover { background-color: lightblue; color: white;  }
    
    td { overflow: hidden; white-space: nowrap;}
`

