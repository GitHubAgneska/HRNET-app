import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper } from '../Employee-form/Employee-form-style'

const SelectInput = ({field, fieldName, values, options, handleInputChange, handleBlur, errors, touched}) => {
    
    let stateValue = values.state;
    let depValue = values.department;

    return (
        <InputWrapper>
            <FormLabel fieldName={fieldName}></FormLabel>
            <select
                options={options}
                name={fieldName}
                id={`${fieldName}-select`}
                value={ fieldName ==='state'? stateValue: depValue }
                onChange={e => handleInputChange(field.fieldName, e.target.value)}
                onBlur={e => handleBlur(field.fieldName, e.target.value)}
                aria-required="true"
                touched={touched}
                >
                { fieldName === 'state' && 
                    options.map(i => (
                        <option key={Math.random()} value={i.name}>{i.name}</option>
                    ))
                }
                { fieldName === 'department' && 
                    options.map(i => (
                        <option key={Math.random()} value={i}>{i}</option>
                    )) 
                }
            </select>
            { errors[field.fieldName] ? <span>{errors[field.fieldName]}</span> : null }
        </InputWrapper>
    )
}

export default SelectInput

SelectInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}