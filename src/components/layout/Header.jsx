import {Link} from 'react-router-dom';
import {SrOnlyH1} from '../../style/global_style'

const Header = () => {
    return (
        <nav>
            <div>
                <Link to="/">home</Link>
                <SrOnlyH1>HRnet</SrOnlyH1>
            </div>
        </nav>)
}
export default Header
