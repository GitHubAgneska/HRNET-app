import { useState } from "react";
import { validate } from "../../../utils/form_validators"
import { FormWrapper, FormInputsWrapper, FormBtnsWrapper, InputWrapper} from './Employee-form-style'
import { StyledBtn } from "../../../style/global_style"
import FormInput from '../Form-inputs/FormInput'
// import { EmployeeModel } from "../../../models/employee-model";
import PropTypes from "prop-types"

const EmployeeForm = () => {

    const employeeFields = [ 'firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department' ];

    const [ values, setValues ] = useState({});
    const [ disabled, setDisabled ] = useState(true);

    const [ errors, setErrors ] = useState({});
    const [ touched, setTouched ] = useState({});
    const [ successMessage, setSuccessMessage ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState({});
    
    const handleInputChange = (event) => {
        const {value, name } = event.target
        //const { name, value: newValue, type } = event.target;
        // const value = type === 'number' ? +newValue : newValue; // keep number fields as numbers
       //  if ( name === 'date') { }
        console.log('ONCHANGE:=',  value )
        setValues({ ...values, [name]: value }); // allows dynamic adding of properties
        setTouched({ ...touched, [name]: true });
    }

    const handleBlur = (event) => {        
        const { name, value } = event.target;
        console.log('ONBLUR:=', event.target.value);

        const { [name]: removedError, ...rest } = errors; // remove error msg if any
        const error = validate[name](value); // check new error
        // validate field if val touched
        setErrors({ ...rest, ...(error && { [name]: touched[name] && error }) });
    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
        console.log('FORM values=',values);
        
        const formValidation = Object.keys(values).reduce(
            (acc, key) => {
                    const newError = validate[key](values[key]); // = validate[fieldName](fieldValue)
                    const newTouched = { [key]: true };
                    return { errors: { ...acc.errors, ...(newError && { [key]: newError }) },
                            touched: { ...acc.touched, ...newTouched }
                            }
            },
            { errors: { ...errors }, touched: { ...touched } }
        );

        setErrors(formValidation.errors);
        setTouched(formValidation.touched);
        
        if ( !Object.values(formValidation.errors).length // errors object = empty
             && Object.values(formValidation.touched).length === Object.values(values).length // all fields were touched
             && Object.values(formValidation.touched).every(t => t === true ) // every touched field is true
            ) {
                console.log(JSON.stringify(values, null, 2));
            }
    }

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit} autoComplete="off">

                { employeeFields.map(i => (
                    <FormInput 
                        key={Math.random()}
                        fieldName={i}
                        /* value={values} setValue={setValues}
                        handleInputChange={handleInputChange}
                        handleBlur={handleBlur} */ />
                ))}
                <FormBtnsWrapper>
                    <StyledBtn /* disabled={disabled} */>Save</StyledBtn>
                    <StyledBtn>Cancel</StyledBtn>
                </FormBtnsWrapper>
            </form>
        </FormWrapper>

    )
}

export default EmployeeForm

EmployeeForm.defaultProps = { disabled: true }
EmployeeForm.propTypes = { }
