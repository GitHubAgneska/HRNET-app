import styled from "styled-components"

export const TableWrapper = styled.div`
    max-height: 60vh;
    overflow: scroll;
    border: 2px solid white;
    border-radius: 5px;
    color:white;
`

export const StyledTable = styled.table` 
    width: 100%;
    tbody { font-size: 0.8rem; }
`

export const StyledTableHeader = styled.thead`
    min-height: 2rem;
    text-transform: uppercase;
    font-size: 0.8em;
    th {
        height: 3.5rem;
        position: sticky; top: 0; 
        color: white; 
        background-color: #888; 
    }
`

export const TableHeaderIconWrapper = styled.div`
    min-height: 1rem;
`

export const StyledTableRow = styled.tr`
    height: 2rem;
    
    ${({entries}) => entries%2===0 ? 
    `:nth-child(even) {background-color: #white; }`
    : `:nth-child(odd) {background-color: #ccc; color:black }` }

    &:hover { background-color: lightblue; color: black;}
    
    td { 
        width: 10%;
        overflow: hidden;
    }
`



