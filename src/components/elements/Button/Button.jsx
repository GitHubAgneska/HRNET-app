import { Fragment } from "react";
import PropTypes from "prop-types"
import { StyledBtn } from "../../../style/global_style"

const Button = props => { 
    const { btnName, handleClick } = props;

    return ( 
        <Fragment>
            <StyledBtn onClick={handleClick}>{btnName}</StyledBtn>
        </Fragment>
    )
}

export default Button

Button.propTypes = { 
    btnName: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}
