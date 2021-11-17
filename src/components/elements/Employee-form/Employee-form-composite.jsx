import PropTypes from "prop-types"

import DateInput from '../Form-inputs/DateInput'
import SimpleInput from '../Form-inputs/SimpleInput'
import SelectInput from '../Form-inputs/SelectInput'
import FormLabel from '../FormLabel/FormLabel'
import Button from '../Button/Button'

import { InputWrapper } from '../Employee-form/Employee-form-style'

import {states}  from '../../../data/us-states'
import {departments} from '../../../data/departments'

const employeeFields = [ 'firstName', 'lastName', 'dob', 'startDate', 'street', 'city', 'state', 'zipcode', 'department' ];

const CompositeForm = props => {
     
    const handleSubmit = event => { }
    const handleInputChange =  event => { }
    const handleBlur =  event => { }

    return (

        <form onSubmit={handleSubmit}>
            { employeeFields.map(i => (
                    
                (i ==='firstName' ||  i ==='lastName' || i ==='street' || i ==='city')?
                    
                    <SimpleInput 
                        key={Math.random()}
                        fieldName={i}
                        /* value={values} setValue={setValues}*/
                        handleInputChange={handleInputChange}
                        handleBlur={handleBlur}  />
                
                : (i ==='dob' || i ==='startDate') ?
                    <DateInput
                        key={Math.random()}
                        handleInputChange={handleInputChange}
                        handleBlur={handleBlur}
                        fieldName={i}  />

                : (i ==='department') ?
                    <SelectInput 
                        key={Math.random()}
                        fieldName={i} 
                        options={departments}
                        handleInputChange={handleInputChange}
                        handleBlur={handleBlur}
                    />
                : (i ==='state') ?
                    <SelectInput 
                        key={Math.random()}
                        fieldName={i} 
                        options={states}
                        handleInputChange={handleInputChange}
                        handleBlur={handleBlur}
                    />
                
                    :null
            ))}
        </form>
    )
}

export default CompositeForm
CompositeForm.propTypes = { 

}