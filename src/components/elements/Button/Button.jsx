import PropTypes from "prop-types"
import { StyledBtn } from './Button-style'


const Button = ({ type, btnName, handleClick, disabled, width } ) => {

    return ( 
        <StyledBtn
        type={type}
        width={width}
        disabled={disabled}
        onClick={(e)=>handleClick(e)}
        >{btnName}</StyledBtn>
    )
}
export default Button

Button.propTypes = {
    type: PropTypes.string,
   /*  btnName: PropTypes.string.isRequired, */
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.string
}

