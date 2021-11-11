import {Link} from 'react-router-dom';
import {SrOnlyH1} from '../../style/global_style'
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <nav style={{height:'50px', width:'100%', borderBottom:'2px solid red', display:'inline-flex'}}>
            <div style={{height:'30px', width:'100px'}}>
                HRNET
            </div>
            <div>
                <Link to="/"><Button>home</Button></Link>
                <SrOnlyH1>HRnet</SrOnlyH1>
            </div>
        </nav>)
}
export default Header
