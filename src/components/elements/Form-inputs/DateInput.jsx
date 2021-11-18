import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper } from '../Employee-form/Employee-form-style'

const DateInput = ({ fieldName }) => { 
    
    // const { handleBlur, handleInputChange } = props;
    
    return (
        <InputWrapper>
            <FormLabel fieldName={fieldName}></FormLabel>
            <input
                type="date"
                name={fieldName}
                placeholder={fieldName}
                //onBlur={handleBlur}
                //onChange={handleInputChange} 
                aria-required="true"
            />
        </InputWrapper>
    )
}
export default DateInput

DateInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    //handleInputChange: PropTypes.func.isRequired,
    //handleBlur: PropTypes.func.isRequired
}