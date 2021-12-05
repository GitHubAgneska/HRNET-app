import styled from "styled-components"

export const SearchBoxWrapper = styled.section`
    width: 100%;
    border: 3px solid lightblue;
    border-radius: 15px;
    display: inline-flex;
    margin-top: 2%;
    align-items: center;
`

export const SearchBoxInput = styled.input`
    width: 95%; height: 25px;
    border: transparent !important;
    border-radius: 15px;
    padding: 0px 5px;
    
    &::active, &::focus {  border: none !important;}
    ::placeholder { 
        font-weight: light; opacity: 0.8;
    }
    icon { margin: 1%; }
    icon:first-child { border-right: 1px solid grey }
`

export const SearchSuggestionsWrapper = styled.div`
    border: 3px solid lightblue;
    text-align: justify;
    margin-bottom: 2%;
    ul {
        li {  }
    }

`
