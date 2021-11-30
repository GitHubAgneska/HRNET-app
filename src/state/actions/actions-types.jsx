
// EMPLOYEE ACTIONS TYPES.....................................
export const  SET_EMPLOYEE = 'employee/create_employee'; // whole object

export const  SET_FIRSTNAME ='employee/set_firstname';
export const  SET_LASTNAME ='employee/set_lastname';
export const  SET_DOB ='employee/set_dob';
export const  SET_STARTDATE ='employee/set_startdate';
export const  SET_STREET ='employee/set_street';
export const  SET_CITY  ='employee/set_city';
export const  SET_USSTATE  ='employee/set_usstate';
export const  SET_ZIPCODE  ='employee/set_zipcode';
export const  SET_DEPARTMENT  ='employee/set_department';

// GET request
export const  EMPLOYEE_GET_FETCHING ='employee/fetching';
export const  EMPLOYEE_GET_RESOLVED ='employee/resolved';
export const  EMPLOYEE_GET_REJECTED ='employee/rejected';
// PUT request
export const  EMPLOYEE_EDIT_FETCHING ='employee/edit_fetching';
export const  EMPLOYEE_EDIT_RESOLVED ='employee/edit_resolved';
export const  EMPLOYEE_EDIT_REJECTED ='employee/edit_rejected';
// DELETE request
export const  EMPLOYEE_DELETE_FETCHING ='employee/delete_fetching';
export const  EMPLOYEE_DELETE_RESOLVED ='employee/delete_resolved';
export const  EMPLOYEE_DELETE_REJECTED ='employee/delete_rejected';


// EMPLOYEES LIST ACTIONS TYPES .................................
export const  EMPLOYEES_LIST_FETCHING ='employees-list/fetching';
export const  EMPLOYEES_LIST_RESOLVED ='employees-list/resolved';
export const  EMPLOYEES_LIST_REJECTED ='employees-list/rejected';
// POST request
export const EMPLOYEES_LIST_CREATE_FETCHING ='employees-list/create_fetching';
export const EMPLOYEES_LIST_CREATE_RESOLVED ='employees-list/create_resolved';
export const EMPLOYEES_LIST_CREATE_REJECTED ='employees-list/create_rejected';

// FILTERS ACTIONS TYPES .................................
export const FILTER_PARAM_CHANGED = 'filters/filter-param-changed'
export const FILTER_SEARCHTERM_CHANGED = 'filters/filter-searchterm-changed'
export const FILTER_ENTRIES_AMOUNT_CHANGED = 'filters/filter-entries-changed'

