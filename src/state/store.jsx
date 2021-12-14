import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import employeeReducer from "./reducers/employee-reducer"
import employeesListReducer from './reducers/employeesList-reducer'
import filterReducer from './reducers/filter-reducer'
import pagesReducer from './reducers/pages-reducer'

// INITIAL STATE ( sliced into features )
export const initialState = {

    employee: {
        id: null,
        firstName: '',
        lastName: '',
        dob: '',
        startDate: '',
        address: {
            street: '',
            city: '',
            state: '',
            zipcode: ''
        },
        department: '',
        // api/local storage GET request state
        get_status: 'void',
        get_payload: null,
        get_error: null
    },
    employeesList: {
        originalList: [],
        // api/local storage request state
        get_status: 'void',
        get_data: null,
        get_error: null,
        // api/local storage POST request state
        post_status: 'void',
        post_payload: null,
        post_error: null,
    },
    filters : {
        filterStatus: 'none',
        currentParamFilter: { param: '', reverseOrder: false },  
        
        searchterm: '',
        searchActive: false,
        searchResults: [],
    },
    pages: {
        entries: 0,
        totalPages: 0,
        pagesArray: null,
        currentActivePage: 0
    }
}

// SELECTORS
export const employeeState = (state) => state.employee
export const employeesListState = (state) => state.employeesList
export const filtersState = (state) => state.filters
export const pagesState = (state) => state.pages


const voidEmployee = { status: 'void' }
export const selectEmployeeState = (id) => (state) => {
    return state.employee[id] ?? voidEmployee  }

export const reducers = combineReducers({
    employee: employeeReducer,
    employeesList: employeesListReducer,
    filters: filterReducer,
    pages: pagesReducer
})

// adding of a 'rootReducer' allows a complete reset of all sub-reducers ( e.g : reset state on logout)
export const rootReducer = (state, action) => {
    return reducers(state, action)
}

export const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log('NEW STATE:', store.getState())
})


