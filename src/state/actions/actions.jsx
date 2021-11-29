import {
    SET_EMPLOYEE, SET_FIRSTNAME, SET_LASTNAME,
    SET_DOB, SET_STARTDATE, SET_STREET, SET_CITY,
    SET_USSTATE, SET_ZIPCODE, SET_DEPARTMENT,
    
    EMPLOYEE_CREATE_FETCHING, EMPLOYEE_CREATE_RESOLVED, EMPLOYEE_CREATE_REJECTED,
    EMPLOYEE_GET_FETCHING, EMPLOYEE_GET_RESOLVED, EMPLOYEE_GET_REJECTED,

    EMPLOYEES_LIST_FETCHING, EMPLOYEES_LIST_RESOLVED, EMPLOYEES_LIST_REJECTED,
    FILTER_PARAM_CHANGED, FILTER_SEARCHTERM_CHANGED, FILTER_ENTRIES_AMOUNT_CHANGED 
} from './actions-types'

// ................................................................................. 
// ACTIONS CREATORS : EMPLOYEE 
// ................................................................................. 
// EMPLOYEE - SET DATA actions .....................................................  
//  ( when : creating a new employee / editing an existing employee )
export const setEmployee = (employee) => (dispatch) => (dispatch({type: SET_EMPLOYEE, payload: employee}))

export const setFirstName = (firstName) => (dispatch) => (dispatch({type: SET_FIRSTNAME, payload: firstName}))
export const setLastName = (lastName) => (dispatch) => (dispatch({type: SET_LASTNAME, payload: lastName}))
export const setDob = (dob) => (dispatch) => (dispatch({type: SET_DOB, payload: dob}))
export const setStartDate = (startDate) => (dispatch) => (dispatch({type: SET_STARTDATE, payload: startDate}))
export const setStreet = (street) => (dispatch) => (dispatch({type: SET_STREET, payload: street}))
export const setCity = (city) => (dispatch) => (dispatch({type: SET_CITY, payload: city}))
export const setUsState = (usState) => (dispatch) => (dispatch({type: SET_USSTATE, payload: usState}))
export const setZipcode = (zipcode) => (dispatch) => (dispatch({type: SET_ZIPCODE, payload: zipcode}))
export const setDepartment = (department) => (dispatch) => (dispatch({type: SET_DEPARTMENT, payload: department}))

// EMPLOYEE - GET/PUT DATA actions .....................................................  
export const employeeFetching = (id) => (dispatch) => (dispatch({type: EMPLOYEE_GET_FETCHING, payload: id}))
export const employeeResolved = (id, data) => (dispatch) => (dispatch({type: EMPLOYEE_GET_RESOLVED, payload: { id, data }}))
export const employeeRejected = (id, error) => (dispatch) => (dispatch({ type: EMPLOYEE_GET_REJECTED, payload: { id, error}}))

// ................................................................................. 
// ACTIONS CREATORS : EMPLOYEES LIST 
// ................................................................................. 
// EMPLOYEES LIST - GET/POST DATA actions...................................................
export const employeesListFetching = () => (dispatch) => (dispatch({type: EMPLOYEES_LIST_FETCHING }))
export const employeeslistResolved = (data) => (dispatch) => (dispatch({type: EMPLOYEES_LIST_RESOLVED, payload: data}))
export const employeesListRejected = (error) => (dispatch) => (dispatch({type: EMPLOYEES_LIST_REJECTED, payload: error}))

export const employeeCreateFetching = (data) => (dispatch) => (dispatch({type: EMPLOYEE_CREATE_FETCHING, payload: data}))
export const employeeCreateResolved = (data) => (dispatch) => (dispatch({type: EMPLOYEE_CREATE_RESOLVED, payload: data}))
export const employeeCreateRejected = (error) => (dispatch) => (dispatch({type: EMPLOYEE_CREATE_REJECTED, payload: error}))

// ................................................................................. 
// ACTIONS CREATORS : FILTERS (not async)
// ................................................................................. 
export const paramFilterChanged = (filterParam, reverse ) => ({ type: FILTER_PARAM_CHANGED, payload: { filterParam, reverse } })
export const searchtermFilterChanged = (searchterm) => ({ type: FILTER_SEARCHTERM_CHANGED, payload: searchterm })
export const entriesFilterChanged = (entries) => ({ type: FILTER_ENTRIES_AMOUNT_CHANGED, payload: entries })
