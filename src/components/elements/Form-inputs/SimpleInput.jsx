import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper } from '../Employee-form/Employee-form-style'

const SimpleInput = ({field, fieldName, handleInputChange, handleBlur, errors }) => { 
    // console.log('error INPUT ELEMENT ==', errors[fieldName]);
    // console.log('Touched INPUT ELEMENT ==', touched)
    return (
        <InputWrapper>
            <FormLabel fieldName={fieldName}></FormLabel>
            <input
                type="text"
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

export default SimpleInput

SimpleInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
}