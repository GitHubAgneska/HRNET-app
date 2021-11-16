import PropTypes from "prop-types"
import { InputWrapper } from '../Employee-form/Employee-form-style'
import {states}  from '../../../data/us-states'
import {departments} from '../../../data/departments'

const stateOptions = [...states];
const deps = [ ...departments];


const FormInput = props => { 
    
    const { fieldName, handleInputChange, handleBlur } = props;
        
    return (
        <InputWrapper>
            <label htmlFor={fieldName}>{fieldName}</label>
            
                { (fieldName ==='firstName' ||  fieldName ==='lastName' || fieldName ==='street' || fieldName ==='city')
                    &&    
                    <input
                        type="text"
                        name={fieldName}
                        placeholder={fieldName}
                        onBlur={handleBlur}
                        onChange={handleInputChange} 
                        aria-required="true"
                    /> 
                }

                { fieldName === 'department' &&
                        <select
                            options={deps}
                            name={fieldName}
                            id="`{fieldName}`-select"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            aria-required="true">
                                { deps.map(i => (
                                    <option key={Math.random()} value={i} >{i}</option>
                                )) }
                        </select>
                }    

                { fieldName === 'state' && 
                        <select
                            options={stateOptions}
                            name={fieldName}
                            id="`{fieldName}`-select"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            aria-required="true">
                                { Object.keys(stateOptions).map(i => (
                                    <option key={Math.random()} value={stateOptions[i].name} >{stateOptions[i].name}</option>
                                )) }                            
                        </select>
                }
            
            {/* { touched.{fieldName} && errors.{fieldName}? <span><small>{errors.{fieldName}}</small></span>: null } */}
        </InputWrapper>
    )
} 

export default FormInput
FormInput.propTypes = {fieldName: PropTypes.string}