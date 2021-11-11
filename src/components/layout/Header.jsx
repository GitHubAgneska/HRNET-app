import {Link} from 'react-router-dom';
import styled from 'styled-components'

const StyledNav = styled.nav`
    display: flex;
    flexFlow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    border-bottom: 5px solid violet;
    background-color: lightgrey;
`;
const MainLogoWrapper = styled.div`
    width: 12.5rem; // 200px;
    min-width: 135px;
`;

const MainLogo = styled.h1`
    max-width: 100%;
    color: white;
`

const LinksWrapper = styled.div`
    width: 25%;
    display: inline-flex;
    justify-content: space-between;
`

const Header = () => {
    return (
        <StyledNav>
            <MainLogoWrapper>
                <MainLogo>HRNET</MainLogo>
            </MainLogoWrapper>

            <LinksWrapper>
                <Link to="/">home</Link>
                <Link to="/employees-list">employees</Link>
            </LinksWrapper>

        </StyledNav>)
}
export default Header
