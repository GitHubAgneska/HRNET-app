import styled from "styled-components"

export const SearchBoxWrapper = styled.div`
    width: 100%;
    border: 3px solid lightblue;
    border-radius: 15px;
    display: inline-flex;
    margin: 2% 0%;
    align-items: center;
`

export const SearchBoxInput = styled.input`
    width: 97%; height: 25px;
    border: transparent !important;
    border-radius: 15px;
    padding: 0px 5px;
    
    &::active, &::focus {  border: none !important;}
    ::placeholder { 
        font-weight: light; opacity: 0.8;
    }  
    
`
