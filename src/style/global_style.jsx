import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        scroll-behavior: smooth;
    }
    html {
        font-size: 100%; /* = 16px default */
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        margin: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    a { text-decoration: none; color: inherit; }
    ul { margin: 0; padding: 0;}
    ul li { list-style: none; }
    button { display: block; border: none; }
    main {
        @media screen and (min-width:600px) { width: 90%; margin: auto;}
    }
`

export const TitleWrapper = styled.div`
    margin: 2% auto;
    border: 1px solid grey;
    border-radius:5px;
    text-align: center;
    background-color: white;
`

export const StyledTitle = styled.h1`
    color: grey;
    font-size:1em;
`

export const LoadingSpinnerWrapper = styled.div`
    margin-top:10%;
`

export const DataTablePageWrapper = styled.main`
    width: 90%;
    margin:auto; padding-top: 2%;
`

export const EmployeeFormPageWrapper = styled.main`
    /* border:1px solid lightgrey; */
`

/* accessibility - .sr-only class */
export const SrOnlyH1 = styled.h1`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`;

export const SrOnlyH2 = styled.h2`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
`;




