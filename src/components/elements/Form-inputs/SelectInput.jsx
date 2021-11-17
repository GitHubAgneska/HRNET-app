import { Fragment } from "react";
import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper } from '../Employee-form/Employee-form-style'

const SelectInput = props => { 

    const { fieldName, handleInputChange, handleBlur, options } = props;
    
    return (
        <InputWrapper>
            <FormLabel fieldName={fieldName}></FormLabel>
            <select
                options={options}
                name={fieldName}
                id="`{fieldName}`-select"
                onChange={handleInputChange}
                onBlur={handleBlur}
                aria-required="true">
                    
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