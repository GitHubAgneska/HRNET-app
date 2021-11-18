import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper } from '../Employee-form/Employee-form-style'

const DateInput = ({field, fieldName, handleInputChange, values, handleBlur, touched, errors }) => { 
    console.log('error DATE ELEMENT ==', errors[fieldName]);
    return (
        <InputWrapper>
            <FormLabel fieldName={fieldName}></FormLabel>
            <input
                type="date"
                id={field._uid}
                name={fieldName}
                placeholder={fieldName}
                onChange={e => handleInputChange(field.fieldName, e.target.value)}
                onBlur={e => handleBlur(field.fieldName, e.target.value)} 
                aria-required="true"
            />
            { errors[fieldName] ? <span>{errors[fieldName]}</span> : null }
        </InputWrapper>
    )
}
export default DateInput

DateInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    //handleInputChange: PropTypes.func.isRequired,
    //handleBlur: PropTypes.func.isRequired
}