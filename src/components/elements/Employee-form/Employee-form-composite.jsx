import PropTypes from "prop-types"
import { Fragment, useState } from "react";
import { validate } from "../../../utils/form_validators"
import DateInput from '../Form-inputs/DateInput'
import SimpleInput from '../Form-inputs/SimpleInput'
import SelectInput from '../Form-inputs/SelectInput'
import Button from '../Button/Button'
import { FormWrapper, FormBtnsWrapper } from './Employee-form-style'
import { employeeFormFields } from '../../../data/employee-form-fields'


const CompositeForm = props => {
    
    const [ values, setValues ] = useState({ firstName: '', lastName:'', dob:'', startDate:'',  street:'', city:'', state:'', department:''});
    const [ touched, setTouched ] = useState({});
    const [ errors, setErrors ] = useState({});

    
    const handleInputChange = (fieldId, value) => {
        setValues(currentValues => { currentValues[fieldId] = value; return currentValues; });
        //setValues({ ...values, [fieldId]: value });
        console.log('VALUES===', values);
        setTouched(touched => { touched[fieldId]= true; return touched; });
        // setTouched({ ...touched, [fieldId]: true });
        console.log('touched=', touched)
    }

    const handleBlur = (fieldName, value) => { 
        console.log('onblur values=', values);
        const { [fieldName]: removedError, ...rest } = errors;
        
        const error = validate[fieldName](value); // error = is a string message
        console.log('error at HANDLE BLUR==', error);

        setErrors( {...errors, [fieldName]: error })
        // setErrors(errors => { errors[fieldName] = error; return errors; })
        // setErrors({ ...rest, ...(error && { [fieldName]: touched[fieldName] && error }) });
        console.log('errorS=', errors);
    }

    const handleSubmit = event => { }
    const resetForm = event => { }
    
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
                            values={values}
                            handleInputChange={handleInputChange}
                            handleBlur={handleBlur} />

                    : (i.fieldType ==='select') ?
                        <SelectInput 
                            key={i._uid}
                            fieldName={i.fieldName}
                            values={values}
                            handleInputChange={handleInputChange}
                            options={i.options}
                            handleBlur={handleBlur} />

                    
                        :null
                ))}

                <FormBtnsWrapper>
                    <Button btnName="save" handleClick={handleSubmit}></Button>
                    <Button btnName="cancel" handleClick={resetForm}></Button>
                </FormBtnsWrapper>

            </form>
        </FormWrapper>
    )
}

export default CompositeForm
CompositeForm.propTypes = { 

}