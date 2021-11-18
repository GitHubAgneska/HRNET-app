import PropTypes from "prop-types"
import FormLabel from '../FormLabel/FormLabel'
import { InputWrapper } from '../Employee-form/Employee-form-style'
import { useState } from "react";

const SimpleInput = ({field, fieldName,fieldChanged, values}) => { 
    
    return (
        <InputWrapper>
            <FormLabel fieldName={fieldName}></FormLabel>
            <input
                type="text"
                id={field._uid}
                name={fieldName}
                placeholder={fieldName}
                values={values}
                onChange={e => fieldChanged(field._uid, e.target.value)}
                aria-required="true"
            /> 
        </InputWrapper>
    )
}

export default SimpleInput

SimpleInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
   //handleInputChange: PropTypes.func.isRequired,
   //  handleBlur: PropTypes.func.isRequired
}