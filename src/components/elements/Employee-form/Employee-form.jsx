import { useState } from "react";
///import { FormValidation } from '../../../utils/form-validation'
import { validate, today } from "../../../utils/form_validators";
import { FormWrapper, FormInputsWrapper, FormBtnsWrapper, InputWrapper} from './Employee-form-style'
import { StyledBtn } from "../../../style/global_style"


const EmployeeForm = () => {

    const [ values, setValues ] = useState({});
    const [ disabled, setDisabled ] = useState(true);

    const [ errors, setErrors ] = useState({});
    const [ touched, setTouched ] = useState({});
    const [ successMessage, setSuccessMessage ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState({});
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value }); // allows dynamic adding of properties
        setTouched({ ...touched, [name]: true });
    }

    const handleBlur = (event) => {        
        const { name, value } = event.target;
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
                    return { 
                        errors: {
                            ...acc.errors,
                            ...(newError && { [key]: newError })
                        },
                        touched: {
                            ...acc.touched,
                            ...newTouched
                        }
                }
            },
            {
                errors: { ...errors },
                touched: { ...touched }
            }
        );
        setErrors(formValidation.errors);
        setTouched(formValidation.touched);
        if (
            !Object.values(formValidation.errors).length // errors object = empty
            && Object.values(formValidation.touched).length === Object.values(values).length // all fields were touched
            && Object.values(formValidation.touched).every(t => t === true ) // every touched field is true
            ) {
                console.log(JSON.stringify(values, null, 2));
            }
    }

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit} autoComplete="off">
                <FormInputsWrapper>
                        <InputWrapper>
                            <label htmlFor="firstName">first name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="firstName"
                                onBlur={handleBlur}
                                onChange={handleInputChange} 
                                aria-required="true"
                                />
                                {/* <i class="fas fa-exclamation-circle failure-icon"></i>
                                <i class="far fa-check-circle success-icon"></i> */}
                            { touched.firstName && errors.firstName? <span><small>{errors.firstName}</small></span>: null }
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="lastName">last name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="lastName"
                                /* placeholder={lastName} */
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                                aria-required="true"
                                />
                            { touched.lastName && errors.lastName? <span><small>{errors.lastName}</small></span>: null }
                        </InputWrapper>
                    </FormInputsWrapper>
                    
                    <FormInputsWrapper>
                        <InputWrapper>
                            <label htmlFor="dob">date of birth</label>
                            <input
                                type="date"
                                name="dob"
                                id="dob"
                                /* placeholder="dob" */
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                                aria-required="true"
                                min="1940-01-01" max="2000-01-01"
                                placeholder="MM/DD/YYYY"
                            />
                            { touched.dob && errors.dob? <span><small>{errors.dob}</small></span>: null }
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="startdate">Start date</label>
                            <input
                                type="date"
                                name="startdate"
                                id="startdate"
                                /* placeholder="start date" */
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                                aria-required="true"
                                min="2000-01-01" max="2022-01-01" /* --- to review to use 'today' */
                                placeholder="MM/DD/YYYY"
                            />
                            { touched.startdate && errors.startdate? <span><small>{errors.startdate}</small></span>: null }
                        </InputWrapper>
                    </FormInputsWrapper>
                    
                    <FormInputsWrapper>
                        <legend>Address</legend>
                        <InputWrapper>
                            <input
                                type="text"
                                name="street"
                                id="street"
                                placeholder="street"
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                                aria-required="true"
                            />
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                        <InputWrapper>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="city"
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                                aria-required="true"
                            />
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                        <InputWrapper>
                            <select 
                                name="state" 
                                id="state-select"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                aria-required="true">
                                    <option value="">state</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                            </select>
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                        <InputWrapper>
                            <input
                                name="zipcode"
                                id="zipcode"
                                placeholder="zipcode"
                                onBlur={handleBlur}
                                onChange={handleInputChange}
                                aria-required="true"
                            />
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                    </FormInputsWrapper>

                    <FormInputsWrapper>
                        <legend>Department</legend>
                        <InputWrapper>
                            <select 
                                name="department"
                                id="dpt-select"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                aria-required="true">
                                    <option value="">Department</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                            </select>
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>

                    </FormInputsWrapper>

                    <FormBtnsWrapper>
                        <StyledBtn disabled={disabled}>Save</StyledBtn>
                        {/* <StyledBtn>Cancel</StyledBtn> */}
                    </FormBtnsWrapper>


            </form>
        </FormWrapper>

    )
}

export default EmployeeForm

EmployeeForm.defaultProps = { disabled: true }