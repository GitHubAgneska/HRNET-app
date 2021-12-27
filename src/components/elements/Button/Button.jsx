import PropTypes from "prop-types"
import { StyledBtn } from './Button-style'


const Button = ({ btnName, handleClick, disabled, width } ) => {

    return ( 
        <StyledBtn 
        onClick={(e)=>handleClick(e)} 
        disabled={disabled}
        width={width}
        >{btnName}</StyledBtn>
    )
}
export default Button

Button.propTypes = {
    btnType: PropTypes.string,
    btnName: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.string
}

/* function BtnFactory(props) {
    switch (props.btnType) {
        case: "cancelAction":
            return  <StyledBtn

    }
} */
