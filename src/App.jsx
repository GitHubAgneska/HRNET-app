import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/layout/Header/Header'
import CreateEmployee from './components/containers/Create-employee'
import Employees from './components/containers/Employees';
import NotFoundPage from './components/containers/404'
import { GlobalStyle } from './style/global_style'

import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getEmployeesCurrentList } from './features/employees-list_feature'


const App = () => {
    const dispatch = useDispatch()
    // 1 - INITIAL FETCH: generate a fake list of employees from mirage
    //   will also dispatch 'set' (default=all list) 
    // + 'setUpPagination' (default = 10 results/page)
    useEffect(()=> {
        dispatch(getEmployeesCurrentList)
    }, [dispatch])

    return (
        <div className="App">
            <GlobalStyle />
                <div className="container">
                    <Router>
                        <Header /> {/* INSIDE router because contains NAV with 'LINK TO'  */}

                        <Fragment>
                            <Switch>
                                <Route exact path="/"  render={() => <Redirect to="/create-employee" />} />
                                <Route exact path="/create-employee" component={CreateEmployee} />
                                <Route exact path="/employees-list" component={Employees} />
                                <Route component={NotFoundPage} />
                            </Switch>
                        </Fragment>

                    </Router>

            </div>
        </div>
    )
}
export default App
