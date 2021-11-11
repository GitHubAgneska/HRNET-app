import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/layout/Header'
import CreateEmployee from './components/containers/Create-employee'
import EmployeesList from './components/containers/Employees-list';
import NotFoundPage from './components/containers/404'


const App = () => {

    return (
        <div className="App">
            <div className="container" style={{height:'100%', width:'100%'}}>

                    <Router>
                        <Header /> {/* INSIDE router because contains NAV with 'LINK TO'  */}

                        <Fragment>
                            <Switch>
                                <Route exact path="/"  render={() => <Redirect to="/create-employee" />} />
                                <Route exact path="/create-employee" component={CreateEmployee} />
                                <Route exact path="/employees-list" component={EmployeesList} />
                                <Route component={NotFoundPage} />
                            </Switch>
                        </Fragment>

                    </Router>

            </div>
        </div>
    )
}
export default App
