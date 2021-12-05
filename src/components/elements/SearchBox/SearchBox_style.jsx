import styled from "styled-components"

export const SearchBoxWrapper = styled.section`
    width: 100%;
    border: 3px solid #ccc;
    border-radius: 15px;
    display: inline-flex;
    margin-top: 2%;
    align-items: center;
    svg { margin: 1%; }
    margin-bottom: 2%;
`

export const SearchBoxInput = styled.input`
    width: 95%; height: 25px;
    border: none !important;
    outline: none;
    border-radius: 15px;
    padding: 0px 5px;
    ::placeholder { font-weight: light; opacity: 0.8; }
`

export const SearchSuggestionsWrapper = styled.div`
    border: 3px solid #ccc;
    text-align: justify;
    margin-bottom: 2%;
    ul {
        li { border-bottom: 1px solid #ccc; }
    }

`
