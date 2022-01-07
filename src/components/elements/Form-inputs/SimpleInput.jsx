import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper } from '../Employee-form/Employee-form-style'

const SimpleInput = ({field, handleInputChange, handleBlur, errors, touched }) => {
    
    let valid = touched[field.fieldName] && !errors[field.fieldName]
    let invalid = touched[field.fieldName] && errors[field.fieldName]
    return (
        <InputWrapper>
            <FormLabel fieldName={field.fieldName}></FormLabel>
            <input 
                type="text"
                id={field._uid}
                name={field.fieldName}
                /* placeholder={field.fieldName} */
                onChange={e => handleInputChange(field.fieldName, e.target.value)}
                onBlur={e => handleBlur(field.fieldName, e.target.value)}
                aria-required="true"
                style={{border: valid? '2px solid #42f5a4': invalid ? '1px solid red': ''}}

            />
            { errors[field.fieldName] ? <span>{errors[field.fieldName]}</span> : null }
        </InputWrapper>
    )
}

export default SimpleInput

SimpleInput.propTypes = {
    field: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
}