import styled from 'styled-components'

export const StyledNav = styled.nav`
    width: 90%;
    margin: auto;
    display: flex;
    flexFlow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    border-bottom: 5px solid violet;
    background-color: lightgrey;
`

export const MainLogoWrapper = styled.div`
    /* width: 12.5rem; // 200px; */
    min-width: 135px;
`

export const MainLogo = styled.h1`
    max-width: 100%;
    color: white;
`

export const LinksWrapper = styled.div`
    width: 25%;
    display: inline-flex;
    justify-content: space-between;
`