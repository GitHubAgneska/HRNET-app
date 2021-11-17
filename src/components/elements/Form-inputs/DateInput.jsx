import PropTypes from "prop-types"
import { Fragment } from "react"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper } from '../Employee-form/Employee-form-style'

const DateInput = props => { 
    
    const { fieldName, handleBlur, handleInputChange } = props;
    
    return (
        <InputWrapper>
            <FormLabel fieldName={fieldName}></FormLabel>
            <input
                type="date"
                name={fieldName}
                placeholder={fieldName}
                onBlur={handleBlur}
                onChange={handleInputChange} 
                aria-required="true"
            />
        </InputWrapper>
    )
}
export default DateInput

DateInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
}