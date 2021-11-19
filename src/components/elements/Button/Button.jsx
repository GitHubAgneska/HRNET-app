import { Fragment } from "react";
import PropTypes from "prop-types"
import { StyledBtn } from "../../../style/global_style"

const Button = ({btnName, handleClick, disabled} ) => { 

    return ( 
        <Fragment>
            <StyledBtn onClick={handleClick} disabled={disabled}>{btnName}</StyledBtn>
        </Fragment>
    )
}

export default Button

Button.propTypes = { 
    btnName: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}
