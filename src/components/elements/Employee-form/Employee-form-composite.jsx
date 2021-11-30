import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { validate } from "../../../utils/form_validators"
import { employeeFormFields } from '../../../data/employee-form-fields'
import DateInput from '../Form-inputs/DateInput'
import SimpleInput from '../Form-inputs/SimpleInput'
import SelectInput from '../Form-inputs/SelectInput'
import Button from '../Button/Button'
import { FormWrapper, FormBtnsWrapper } from './Employee-form-style'
import BaseModal from '../Modal/Modal'
import { modalTypes } from '../../../data/modal-types'
import { createEmployee } from '../../../features/employees-list_feature'

const CompositeForm = () => {

    const initialState = {firstName: '', lastName:'', dob:'', startDate:'',  street:'', city:'', zipcode: '', state:'', department:''};
    
    const [ values, setValues ] = useState({ ...initialState});
    const [ touched, setTouched ] = useState({});
    const [ errors, setErrors ] = useState({});
    
    const [ employee, setEmployee ] = useState({})
    const [addRequestStatus, setAddRequestStatus] = useState('void')
    const dispatch = useDispatch()

    const allFieldsOk = // acts on submit disabled/!disabled
        Object.values(touched).every(t => t === true )
        && Object.values(touched).length === Object.values(values).length
        && Object.values(errors).every(t => t === null );

    const formDirty = Object.values(touched).some(t => t === true );

    const [ displayModal, setDisplayModal ] = useState(false);
    const toggleModal = () => { setDisplayModal(!displayModal);}

    // confirm cancel form => modal
    const [ confirmCancel, setConfirmCancel ] = useState(false);
    const toggleConfirmModal = () => { setConfirmCancel(!confirmCancel);}
    

    const confirmCancelMessage = `Are you sure you want to reset the form ? All data for ${values.firstName} ${values.lastName} will be lost`;
    // const confirmCancelUserResponseTypes = [ 'yes', 'no' ];
    const confirmCancelActions = [ 
        { btnName:'yes'/* ,method: 'confirmClose' */ },
        { btnName:'no'/* , method: 'confirmClose' */ } ];

    // confirm creation successful => modal
    const [ creationSuccessful, setCreationSuccessful ] = useState(false);
    const toggleSuccessModal = () => { setCreationSuccessful(!creationSuccessful);}
    const successMessage = `New employee ${values.firstName}, ${values.lastName} successfully created`;
    const successContent = `${values}`;
    // const successUserResponseTypes = [ 'close', 'modify' ];
    const successActions = [ 
        { btnName:'close', method: 'toggleConfirmModal' },
        // { btnName:'modify', method: 'closeModalAndEditForm' } 
    ];

/*     function useCreate(employee) { 
        const dispatch = useDispatch()
        useEffect(() => { dispatch(createEmployee(employee))}, [dispatch, employee])
    } */

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

    const handleSubmit = async event => {
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
        
        if ( Object.values(formValidation.errors).every(t => t === null ) // all errors  = null
             && Object.values(formValidation.touched).length === Object.values(values).length // all fields were touched
             && Object.values(formValidation.touched).every(t => t === true ) // every touched field is true
            ) {
                await dispatch(createEmployee(values))
                //alert(JSON.stringify(values, null, 2));
                
                // setCreationSuccessful(true);
                // close form after success message display
                // setTimeout(() => { toggleForm()}, 2000);

            }
    }
    

    const handleCancel = event => {
        event.preventDefault();
        return formDirty? toggleConfirmModal(): resetForm();
    }

    const resetForm = () => {
        setValues({...initialState}); 
        setTouched({});
        setErrors({});
        console.log('AFTER RESET: values==', values, 'errors=', errors, 'touched=', touched);
        return confirmCancel? toggleConfirmModal() : null;
    }
    
    return (
        <FormWrapper>
            <form /* onSubmit={handleSubmit} */>
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
                    <Button btnName="cancel" handleClick={handleCancel}></Button>
                </FormBtnsWrapper>

            </form>
                
                { confirmCancel &&
                    <BaseModal
                        type='cancelEmployeeCreation'
                        message={confirmCancelMessage}
                        actions={confirmCancelActions}
                        toggleConfirmModal={toggleConfirmModal}
                        resetForm={resetForm}
                        />
                }

                { creationSuccessful &&
                    <BaseModal
                        type='employeeSuccessfullyCreated'
                        message={successMessage}
                        actions={successActions}
                        content={successContent}                    
                        toggleConfirmModal={toggleConfirmModal} />
                }
        </FormWrapper>
    )
}

export default CompositeForm
CompositeForm.propTypes = { 

}