import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/layout/Header/Header'
import CreateEmployee from './components/containers/Create-employee'
//import Employees from './components/containers/Employees';
import NotFoundPage from './components/containers/404'
import { GlobalStyle } from './style/global_style'


import { useDispatch, useSelector, useStore } from "react-redux"
import { useEffect } from "react"
import { fetchList } from './features/list_feature'
import List from './components/containers/List';

const App = () => {
   
    const dispatch = useDispatch()
    const listStatus = useSelector(initialState => initialState.list.status)
    const pages = useSelector(initialState => initialState.list.collectionAsPages)

    
    useEffect(()=> {
        if (listStatus !== 'resolved')
        dispatch(fetchList)
    }, [dispatch])


    // wait for pagination to be set (depends on initial fetch resolving)
    let proceed = false;
    if ( listStatus === 'pending' || listStatus === 'updating' ) { return 'loading' }
    else if ( listStatus === 'resolved') { pages?.length > 0 ? proceed=true:proceed=false; }

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
                                { proceed &&
                                    <Route exact path="/employees-list" component={List} />
                                }
                                <Route component={NotFoundPage} />
                            </Switch>
                        </Fragment>

                    </Router>

            </div>
        </div>
    )
}
export default App
