import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { selectByLastName, createEmployee } from '../../../features/employee_feature'
import { validate } from "../../../utils/form_validators"

import { employeeFormFields } from '../../../data/employee-form-fields'
import DateInput from '../Form-inputs/DateInput'
import SimpleInput from '../Form-inputs/SimpleInput'
import SelectInput from '../Form-inputs/SelectInput'
import Button from '../Button/Button'

import { FormWrapper, FieldsWrapper, FormBtnsWrapper } from './Employee-form-style'
import ModalComp from '../Modal/Modal'
import useModal from '../Modal/useModal'


const CompositeForm = () => {

    const initialState = {firstName: '', lastName:'', dob:'', startDate:'',  street:'', city:'', zipcode: '', state: { name:'', abbreviation:''}, department:''};
    
    const [ values, setValues ] = useState({ ...initialState})
    const [ touched, setTouched ] = useState({})
    const [ errors, setErrors ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const [ justCreated, setJustCreated ] = useState(null)
    const [ existing, setExisting ] = useState({ ...initialState})
    const [ errorCreation, setErrorCreation ] = useState({error: '', firstName: '', lastName:''})
    
    const dispatch = useDispatch()
    const history = useHistory()

    const collection = useSelector(initialState => initialState.list.collection)

    const allFieldsOk = // acts on submit disabled/!disabled
        Object.values(touched).every(t => t === true )
        && Object.values(touched).length === Object.values(values).length
        && Object.values(errors).every(t => t === null );

    const formDirty = Object.values(touched).some(t => t === true );


    const [ displayModal, /* setDisplayModal */ ] = useState(false);
    
    const { isShowing: isModalSuccessShowed, toggle: toggleSuccessModal } = useModal();
    let confirmSuccessModal = {
        message: `New employee successfully created`,
        btnNames: ['ok']
    }
    const { isShowing: isWarningModalShowed, toggle: toggleWarningModal } = useModal();
    let warningModal = {
        message: `This employee already exists:`,
        action: 'Would you like to edit their profile?',
        btnNames: ['yes', 'no']
    }
    const { isShowing: isModalConfirmShowed, toggle: toggleConfirmModal } = useModal();
    let confirmCancelModal = {
        action: 'reset the form',
        message: `Are you sure you want to`,
        content: `All data will be lost`,
        btnNames: ['yes', 'no']
    }
    
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
        )
        setErrors(formValidation.errors);
        setTouched(formValidation.touched);
        
        if ( Object.values(formValidation.errors).every(t => t === null ) // all errors  = null
             && Object.values(formValidation.touched).length === Object.values(values).length // all fields were touched
             && Object.values(formValidation.touched).every(t => t === true ) // every touched field is true
            ) {
                let exists = checkExists(values.lastName)
                if (exists) {
                    setExisting({...values})
                    setErrorCreation({error: 'exists', firstName:values.firstName, lastName:values.lastName})
                    setIsLoading(false)
                    toggleWarningModal()
                }
                else {
                    let state = {} // us-state property should be an object (not possible in select input)
                    state.name = values.state
                    let newEmployee = {...values, state }

                    dispatch(createEmployee(newEmployee))
                        .then(response => setJustCreated({...response.employee}))
                        .then(confirmCreation())
                        .then(setIsLoading(false))
                        .catch(error => setErrorCreation(error))
                }
            }
    }
    const checkExists = (requestedLastName) => {
        let exists = collection.filter(employee => employee.lastName.toLowerCase() === requestedLastName.toLowerCase()).length !==0
        //console.log('exists=>',exists )
        return exists
    }
    const handleEdit = () => {
        setValues(existing)
        setErrorCreation({})
        toggleWarningModal()
    }
    
    // form => user clicks cancel btn: modal confirm action opens
    const handleCancel = event => {
        event.preventDefault()
        toggleConfirmModal()
    }
    
    // cancel form modal : confirm yes (reset form)
    const resetForm = () => { 
        document.getElementById('myform').reset()
        setValues({...initialState})
        setErrors({})
        setTouched({})
    }
    // cancel form modal : confirm no (don't reset (close modal))
    const cancelReset = () => { toggleConfirmModal() }
    const confirmReset = () => { resetForm(); toggleConfirmModal()}
    
    // modal successful creation
    const confirmCreation = () => { toggleSuccessModal() }
    // success modal btn : confirm ok (close modal)
    const okCloselModal = () => { 
        isModalSuccessShowed?toggleSuccessModal(): toggleWarningModal()
        resetForm()
    }


    if ( isLoading ) { return ('loading...') }

    return (
        <FormWrapper displayModal={displayModal} >
            <form id='myform'>
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

                { justCreated && 
                    <ModalComp
                    props={confirmSuccessModal}
                    content={justCreated}
                    okCloselModal={okCloselModal}
                    isShowing={isModalSuccessShowed}
                    />
                }
                { errorCreation && 
                <ModalComp
                props={warningModal}
                content={errorCreation}
                okCloselModal={okCloselModal}
                isShowing={isWarningModalShowed}
                handleEdit={handleEdit}
                />
                }
                
                <ModalComp
                props={confirmCancelModal}
                isShowing={isModalConfirmShowed}
                cancelReset={cancelReset}
                confirmReset={confirmReset}
                />

        </FormWrapper>
    )
}
export default CompositeForm
