import { FormWrapper, FormInputsWrapper, FormBtnsWrapper, InputWrapper} from './Employee-form-style'
import { StyledBtn } from "../../../style/global_style"


const EmployeeForm = () => { 
    return (
        <FormWrapper>
            <form autoComplete="off">
                <FormInputsWrapper>
                        <InputWrapper>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="firstName"
                                /* onBlur={handleBlur}
                                onChange={handleInputChange} */
                                />
                            {/* { touched.firstName && errors.firstName? <span>Please enter a valid first name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                        <InputWrapper>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="lastName"
                                /* placeholder={lastName} */
                                /* onBlur={handleBlur} */
                                /* onChange={handleInputChange} */
                                />
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                    </FormInputsWrapper>
                    
                    <FormInputsWrapper>
                        <InputWrapper>
                            <label htmlFor="dob">date of birth</label>
                            <input
                                type="date"
                                name="dob"
                                id="dob"
                                /* placeholder={lastName} */
                                /* onBlur={handleBlur} */
                                /* onChange={handleInputChange} */
                            />
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                        <InputWrapper>
                            <label htmlFor="startdate">Start date</label>
                            <input
                                type="date"
                                name="startdate"
                                id="startdate"
                                /* placeholder={lastName} */
                                /* onBlur={handleBlur} */
                                /* onChange={handleInputChange} */
                            />
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
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
                                /* onBlur={handleBlur} */
                                /* onChange={handleInputChange} */
                            />
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                        <InputWrapper>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="city"
                                /* onBlur={handleBlur} */
                                /* onChange={handleInputChange} */
                            />
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                        <InputWrapper>
                            <select name="state" id="state-select">
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
                                type="text"
                                name="zipcode"
                                id="zipcode"
                                placeholder="zipcode"
                                /* onBlur={handleBlur} */
                                /* onChange={handleInputChange} */
                            />
                            {/* { touched.lastName && errors.lastName? <span>Please enter a valid last name<br /><small>(name must be at least 3 characters long)</small></span>: null } */}
                        </InputWrapper>
                    </FormInputsWrapper>

                    <FormInputsWrapper>
                        <legend>Department</legend>
                        <InputWrapper>
                            <select name="department" id="dpt-select">
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
                        <StyledBtn /* disabled={disabled} */>Save</StyledBtn>
                        <StyledBtn /* onClick={() => toggleForm()} */ >Cancel</StyledBtn>
                    </FormBtnsWrapper>


            </form>
        </FormWrapper>

    )
}

export default EmployeeForm