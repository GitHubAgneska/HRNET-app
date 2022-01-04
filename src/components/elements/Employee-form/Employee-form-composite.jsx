import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { selectEmployeeByName, createEmployee } from '../../../features/employee_feature'
import { validate } from "../../../utils/form_validators"

import { employeeFormFields } from '../../../data/employee-form-fields'
import DateInput from '../Form-inputs/DateInput'
import SimpleInput from '../Form-inputs/SimpleInput'
import SelectInput from '../Form-inputs/SelectInput'
import Button from '../Button/Button'

import { FormWrapper, FieldsWrapper, FormBtnsWrapper } from './Employee-form-style'
import ModalComp from '../Modal/Modal'
import { listState } from "../../../state/store"


const CompositeForm = () => {

    const initialState = {firstName: '', lastName:'', dob:'', startDate:'',  street:'', city:'', zipcode: '', state:'', department:''};
    
    const [ values, setValues ] = useState({ ...initialState})
    const [ touched, setTouched ] = useState({})
    const [ errors, setErrors ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const history = useHistory();
    
    const dispatch = useDispatch()

    const allFieldsOk = // acts on submit disabled/!disabled
        Object.values(touched).every(t => t === true )
        && Object.values(touched).length === Object.values(values).length
        && Object.values(errors).every(t => t === null );

    const formDirty = Object.values(touched).some(t => t === true );

    const collection = useSelector(initialState => initialState.list.collection)
    const [ displayModal, setDisplayModal ] = useState(false);
    
    const [ showConfirmAction, setConfirmAction ] = useState(false);
    const toggleConfirmModal = () => { setConfirmAction(!showConfirmAction);}
    const [ showInfoModal, setInfoModal ] = useState({});
    const toggleInfoModal = () => { setInfoModal(!showInfoModal); }
    let infoSuccess = false, infoError = false

    
    const handleInputChange = (fieldId, value) => {
        setValues(currentValues => { currentValues[fieldId] = value; return currentValues; }); // !== setValues({ ...values, [fieldId]: value }); ?
        setTouched({ ...touched, [fieldId]: true });// === setTouched(touched => { touched[fieldId]= true; return touched; });
    }

    const handleBlur = (fieldName, value) => {
        // eslint-disable-next-line no-unused-vars
        const { [fieldName]: removedError, ...rest } = errors;
        const error = validate[fieldName](value); // error = is a string message
        setErrors( {...errors, [fieldName]: error }); // !== setErrors({ ...rest, ...(error && { [fieldName]: touched[fieldName] && error }) }); ? 
    }

    const handleSubmit = async event => {
        // console.log('formData=', values);
        event.preventDefault()
        setIsLoading(true)

        const formValidation = Object.keys(values).reduce(
            (acc, key) => {
                const newError = validate[key](values[key]); // = validate[fieldName](fieldValue)
                const newTouched = { [key]: true };
                return { errors: { ...acc.errors, ...(newError && { [key]: newError }) },
                        touched: { ...acc.touched, ...newTouched }
                        }
            },
            { errors: { ...errors }, touched: { ...touched } }
        );

        setErrors(formValidation.errors);
        setTouched(formValidation.touched);
        
        if ( Object.values(formValidation.errors).every(t => t === null ) // all errors  = null
             && Object.values(formValidation.touched).length === Object.values(values).length // all fields were touched
             && Object.values(formValidation.touched).every(t => t === true ) // every touched field is true
            ) {

                dispatch(createEmployee(values))
                    .then(response => alert(response) )

                
            }
    }

    // form cancel btn
    const handleCancel = event => {
        event.preventDefault()
        toggleConfirmModal()
    }

    // modal btn : confirm yes (reset form)
    const resetForm = () => { window.location.reload() }
    // modal btn : confirm no (close modal)
    const cancelModal = () => { toggleConfirmModal()}
    // modal btn : confirm ok (close modal)
    const okCloselModal = () => { toggleInfoModal()}


    let confirmCancelModal = {
            action: 'reset the form',
            message: `Are you sure you want to`,
            content: `All data will be lost`,
            btnNames: ['yes', 'no']
    }

    let confirmSuccessModal = {
            message: `New employee successfully created`,
            btnNames: ['ok']
    }
    let warningModal = {
            message: `This employee already exists`,
            btnNames: ['ok']
    }

    if ( isLoading ) { return ('loading...') }

    return (
        <FormWrapper displayModal={displayModal} >
            <form>
                <FieldsWrapper>
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
                </FieldsWrapper>

                <FormBtnsWrapper style={{width: "60%"}}>
                    <Button btnName="save" handleClick={handleSubmit} disabled={!allFieldsOk} width="40%"></Button>
                    <Button btnName="cancel" handleClick={handleCancel} disabled={!formDirty} width="40%"></Button>
                </FormBtnsWrapper>

            </form>
            { infoSuccess && 
                <ModalComp props={confirmSuccessModal} okCloselModal={okCloselModal} />
            }
                
               {/*  { showConfirmAction &&
                    <ModalComp props={confirmCancelModal} cancelModal={cancelModal} resetForm={resetForm} />
                }
                { (showInfoModal && infoSuccess) && 
                    <ModalComp props={confirmSuccessModal} okCloselModal={okCloselModal} />
                }
                { (showInfoModal && infoError) &&
                    <ModalComp props={warningModal} okCloselModal={okCloselModal} />
                } */}
        </FormWrapper>
    )
}
export default CompositeForm
