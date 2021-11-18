import PropTypes from "prop-types"
import DateInput from '../Form-inputs/DateInput'
import { useState } from "react";
import SimpleInput from '../Form-inputs/SimpleInput'
import SelectInput from '../Form-inputs/SelectInput'
import Button from '../Button/Button'
import { FormWrapper, FormBtnsWrapper } from './Employee-form-style'

import { employeeFormFields } from '../../../data/employee-form-fields'


const CompositeForm = props => {
    
    const [ values, setValues ] = useState({ firstName: '', lastName:'', dob:'', startDate:'',  street:''});
    const [ touched, setTouched ] = useState({});

    const handleInputChange = (event) => {
        console.log( event.target.value)
        //const {value, name } = event.target;
        const value = event.target.value
        const field = event.target.name;
        setValues({[field]: value});
        // setValues({ ...values, [name]: value });
        console.log('values=', values);
        setTouched({ ...touched, [field]: true });
        console.log('onChange=', values, 'touched=', touched)
    }
    
    const handleBlur = event => { 
        console.log('onblur=', event.target.value, 'values=', values)
        // const {value, name } = event.target;
        // const error = validate[name](value);
        // setValues({ ...values, [name]: value })
    }
    const fieldChanged = (fieldId, value) => {
        setValues(currentValues => {
            currentValues[fieldId] = value;
            return currentValues;
        });
        console.log('VALUES===', values)
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
                            fieldChanged={fieldChanged}
                            handleInputChange={handleInputChange}
                            handleBlur={handleBlur} />
                    
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
                            options={i.options}
                            handleInputChange={handleInputChange}
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