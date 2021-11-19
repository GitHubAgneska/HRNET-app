import { Fragment } from "react";
import PropTypes from "prop-types"
import { StyledBtn } from './Button-style'

const Button = ({btnName, handleClick, disabled} ) => { 

    return ( 
        <Fragment>
            <StyledBtn onClick={(e)=>handleClick(e)} disabled={disabled}>{btnName}</StyledBtn>
        </Fragment>
    )
}

export default Button

Button.propTypes = { 
    btnName: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}
