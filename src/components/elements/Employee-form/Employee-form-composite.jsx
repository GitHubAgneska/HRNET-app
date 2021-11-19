import { useState } from "react";
import { validate } from "../../../utils/form_validators"
import { employeeFormFields } from '../../../data/employee-form-fields'
import DateInput from '../Form-inputs/DateInput'
import SimpleInput from '../Form-inputs/SimpleInput'
import SelectInput from '../Form-inputs/SelectInput'
import Button from '../Button/Button'
import { FormWrapper, FormBtnsWrapper } from './Employee-form-style'
import BaseModal from '../Modal/Modal'

const CompositeForm = () => {
    
    const [ values, setValues ] = useState({ firstName: '', lastName:'', dob:'', startDate:'',  street:'', city:'', zipcode: '', state:'', department:''});
    const [ touched, setTouched ] = useState({});
    const [ errors, setErrors ] = useState({});
    // const [ submitDisabled, setSubmitDisabled ] = useState(true);

    const allFieldsOk = // acts on submit disabled/!disabled
        Object.values(touched).every(t => t === true )
        && Object.values(touched).length === Object.values(values).length
        && Object.values(errors).every(t => t === null );

    // confirm cancel form
    const [ modalDisplay, SetModalDisplay ] = useState(false);
    const toggleConfirmModal = () => { SetModalDisplay(!modalDisplay);}


    const handleInputChange = (fieldId, value) => {
        setValues(currentValues => { currentValues[fieldId] = value; return currentValues; }); // !== setValues({ ...values, [fieldId]: value }); ?
        // console.log('VALUES===', values);
        setTouched({ ...touched, [fieldId]: true });// === setTouched(touched => { touched[fieldId]= true; return touched; });
        // console.log('touched=', touched)
    }

    const handleBlur = (fieldName, value) => { 
        // console.log('onblur values=', values);
        const { [fieldName]: removedError, ...rest } = errors;
        const error = validate[fieldName](value); // error = is a string message
        // console.log('error at HANDLE BLUR==', error);
        setErrors( {...errors, [fieldName]: error }); // !== setErrors({ ...rest, ...(error && { [fieldName]: touched[fieldName] && error }) }); ? 
        // console.log('errorS=', errors);
        // console.log('allFieldsOk=',allFieldsOk)
    }

    const handleSubmit = event => {
        // console.log('formData=', values);
        event.preventDefault();

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
        // console.log('ERRORS & TOUCHED ==', formValidation);
        
        if (    Object.values(formValidation.errors).every(t => t === null ) // all errors  = null
             && Object.values(formValidation.touched).length === Object.values(values).length // all fields were touched
             && Object.values(formValidation.touched).every(t => t === true ) // every touched field is true
            ) {
                alert(JSON.stringify(values, null, 2));
            }
    }

    const resetForm = event => {
        event.preventDefault();
        SetModalDisplay(true)
        // Object.values(touched).some(t => t === true )? 
    }
    
    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                { (employeeFormFields).map(i => (
                    
                    (i.fieldType ==='text')?
                        <SimpleInput 
                            key={i._uid}
                            fieldName={i.fieldName}
                            field={i}
                            values={values}
                            handleInputChange={handleInputChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            />
                        
                    : (i.fieldType === 'date') ?
                        <DateInput
                            key={i._uid}
                            fieldName={i.fieldName}
                            field={i}
                            values={values}
                            handleInputChange={handleInputChange}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            />

                    : (i.fieldType ==='select') ?
                        <SelectInput 
                            key={i._uid}
                            fieldName={i.fieldName}
                            field={i}
                            values={values}
                            handleInputChange={handleInputChange}
                            options={i.options}
                            handleBlur={handleBlur}
                            touched={touched}
                            errors={errors}
                            />

                        :null
                ))}

                <FormBtnsWrapper>
                    <Button btnName="save" handleClick={handleSubmit} disabled={!allFieldsOk}></Button>
                    <Button btnName="cancel" handleClick={resetForm}></Button>
                </FormBtnsWrapper>

            </form>
                { modalDisplay &&
                    <BaseModal toggleConfirmModal={toggleConfirmModal} $formDisplay />
                }
        </FormWrapper>
    )
}

export default CompositeForm
CompositeForm.propTypes = { 

}