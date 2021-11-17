import { Fragment } from "react";
import PropTypes from "prop-types"

const Button = props => { 
    const { btnName, handleClick } = props;

    return ( 
        <Fragment>
            <button onClick={handleClick}>{btnName}</button>
        </Fragment>

    )
}

export default Button

Button.propTypes = { 
    btnName: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}
