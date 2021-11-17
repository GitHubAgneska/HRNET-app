import PropTypes from "prop-types"
import { Fragment } from "react"

const SimpleInput = props => { 
    const { fieldName, handleBlur, handleInputChange } = props;

    return (
        <Fragment>
            <input
                type="text"
                name={fieldName}
                placeholder={fieldName}
                onBlur={handleBlur}
                onChange={handleInputChange} 
                aria-required="true"
            /> 
        </Fragment>
    )
}

export default SimpleInput

SimpleInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
}