/* eslint-disable no-unused-vars */

/* FORM VALIDATORS
* ------------------------------------------------------
*/

const error = [
    {  type: 'emptyField', message: '' },
    {  type: 'invalidChars', message: '' },
    {  type: 'length', message: '' },
    {  type: 'unsafePw', message: '' }
]

const onlyCharsReg = /^[a-zA-Z\s]*$/; // only chars and whiteSpaces (if several names)

const nameValidation = (fieldName, fieldValue) => {
    
    if ( fieldName === 'firstName' && fieldValue === fieldName ) { return `firstName is required`; }
    if ( ! onlyCharsReg.test(fieldValue)) { return `firstName should only contain characters`}
    if (fieldValue.trim().length >=1 && fieldValue.trim().length < 3) {
        //return error.type = 'length';
        return `${fieldName} needs to be at least three characters`;
    }
    console.log('name OK')
    return null;
}

const dateValidation = date => {
    
    if ( date.trim() === '' || !(isNaN((new Date(date)).getTime()))) { return 'date is required'}
    console.log('dob/startdate OK')
    return null;
}

const streetValidation = street => {  
    if (street.trim() === '') { return 'street is required'; } 
    if ( !(/\d/g).test(street)) { return 'a street number is required'; }
    console.log('street OK')
    return null;
}

const cityValidation = city => {  
    if (city.trim() === '') { return 'city is required'; } 
    if ( !(onlyCharsReg).test(city)) { return 'city can only contain characters'; }
    console.log('city OK');
    return null;
}

const stateValidation = state => {
    let placeholder = 'state';
    if (state === placeholder ) { return 'state is required'; }
    console.log('state OK');
    return null;
}

const zipCodeValidation = zipcode => {
    if (zipcode.trim() === '') { return 'zipcode is required'; } 
    if ( !(/\d/g).test(zipcode) ) { return 'zipcode can only contain digits '; }
    if (zipcode.length() !== 9) { return 'us zipcode should be 9 digits'; } 
    console.log('zipcode OK');
    return null;
}

const departmentValidation = department => {
    let placeholder = 'Department';
    if (department === placeholder ) { return 'department is required'; }
    console.log('department OK');
    return null;
}

/** 
* @Object validate
* @example validate[methodName](fieldName, value)
*/
export const validate = {

    firstName: firstName => nameValidation('firstName', firstName),
    lastName: lastName => nameValidation('lastName', lastName),
    dob: dob => dateValidation('dob', dob),
    startdate: startdate => dateValidation('startdate', startdate),
    street: street => streetValidation('street', street),
    city: city => cityValidation('city', city),
    state: state => stateValidation('state', state),
    zipcode: zipcode => zipCodeValidation('zipcode', zipcode),
    department: department => departmentValidation('department', department)

};

//
export const today = () => { 

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    
    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; } 
        
    today = yyyy + '-' + mm + '-' + dd;
    return today
}

