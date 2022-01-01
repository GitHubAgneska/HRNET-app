import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper } from '../Employee-form/Employee-form-style'
import { today } from '../../../utils/form_validators'

const DateInput = ({field, fieldName, handleInputChange, handleBlur, errors, touched }) => {
    // console.log('error DATE ELEMENT ==', errors[fieldName]);
    let todaysDate = today().toString();
    // console.log('todaysDate=', todaysDate)
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
                min={fieldName === 'dob' ? '1940-01-01':'2000-01-01'}
                max={fieldName === 'dob' ? '2000-01-01': todaysDate}
                touched={touched}
            />
            { errors[fieldName] ? <span>{errors[fieldName]}</span> : null }
        </InputWrapper>
    )
}
export default DateInput

DateInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
}