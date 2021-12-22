import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import employeeReducer from "./reducers/employee-reducer"
import employeesListReducer from './reducers/employeesList-reducer'
import filteringReducer from './reducers/filtering-reducer'
import paginationReducer from './reducers/pagination-reducer'

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
        // api/local storage GET request state
        get_status: 'void',
        get_data: null,
        get_error: null,
        // api/local storage POST request state
        post_status: 'void',
        post_payload: null,
        post_error: null,
    },
    filtering : {
        results: [],
        sortingStatus: 'none',
        searchActive: false,
        currentSortingParam: { param: '', reverseOrder: false },  
        searchterm: '',
    },
    pagination: {
        resultsAsPages: [],
        entries: null,
        totalPages: null,
        currentActivePageIndex: null,
        currentActivePage: null
    }
}

// SELECTORS
export const employeeState = (initialState) => initialState.employee
export const employeesListState = (initialState) => initialState.employeesList
export const filteringsState = (initialState) => initialState.filtering
export const paginationState = (initialState) => initialState.pagination


const voidEmployee = { status: 'void' }
export const selectEmployeeState = (id) => (state) => {
    return state.employee[id] ?? voidEmployee  }
    
    
export const reducers = combineReducers({
    employee: employeeReducer,
    employeesList: employeesListReducer,
    filtering: filteringReducer,
    pagination: paginationReducer
})

// adding of a 'rootReducer' allows a complete reset of all sub-reducers ( e.g : reset state on logout)
export const rootReducer = (state, action) => {
    return reducers(state, action)
}

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(rootReducer, compose(applyMiddleware(thunk),reduxDevtools));

store.subscribe(() => {
    console.log('NEW STATE:', store.getState())
})


