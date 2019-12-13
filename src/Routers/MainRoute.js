import React from 'react'
import ComplainList from '../components/Complain'
import Nav from './nav/navLink';
import { browserHistory } from 'react-router'
import { history } from '../history';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ParentComponent from '../pages/ParentComponent';
import Login from '../components/login'
import { useSelector, useDispatch } from 'react-redux'

export default function MainRoute() {
  const islogin = useSelector(state => state.loginReducer.success)
  //const dispatch = useDispatch()
  return (
    <div>
      <Router  >
        <Nav />
        <Switch>
          <Route path="/about" render={() => (islogin ? <ParentComponent /> : (<Redirect to="/login" />))}>
          </Route>
          <Route path="/home" render={() => (islogin ? <ParentComponent /> : (<Redirect to="/login" />))}>
          </Route>
          <Route path="/listing" render={() => (islogin ? <ComplainList /> : (<Redirect to="/login" />))}>

          </Route>
          <Route path="/login" component={Login} />

        </Switch>

      </Router>

    </div>
  )
}
