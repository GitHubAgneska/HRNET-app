import styled from 'styled-components'

export const StyledNav = styled.nav`
    @media screen and (min-width:600px) { width: 90%; margin: auto;}
    @media screen and (max-width:600px) {height:3rem; padding: 3%}
    display: flex;
    flexFlow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    border-bottom: 5px solid violet;
    background-color: lightgrey;
`

export const MainLogoWrapper = styled.div`
    @media screen and (max-width:600px) { max-width: 80px; }
    @media screen and (min-width:600px) { min-width: 135px; }
`

export const MainLogo = styled.h1`
    max-width: 100%;
    color: white;
`

export const LinksWrapper = styled.div`
    width: 25%;
    @media screen and (max-width:600px) {display: inline-grid;text-align: left;}
    display: inline-flex;
    justify-content: space-between;
`