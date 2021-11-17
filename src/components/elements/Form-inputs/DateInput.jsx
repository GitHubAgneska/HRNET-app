import PropTypes from "prop-types"
import { Fragment } from "react"

const DateInput = props => { 
    
    const { fieldName, handleBlur, handleInputChange } = props;
    
    return (
        <Fragment>
            <input
                type="date"
                name={fieldName}
                placeholder={fieldName}
                onBlur={handleBlur}
                onChange={handleInputChange} 
                aria-required="true"
            />
        </Fragment>
    )
}
export default DateInput

DateInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
}