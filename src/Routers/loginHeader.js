import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { logoutUser } from '../actions/loginAction';

const Logout = (props) => {
  const logoutStatus = useSelector(state => state.loginReducer.logout)
  const dispatch = useDispatch()
  dispatch(logoutUser())
  if (logoutStatus == true) {
    props.history.push('/login')
  }
  return (
    <div style={{ backgroundColor: 'gray', marginRight: 400, width: 800, height: 50, color: 'white' }}>>

        </div>
  )
}
export class loginHeader extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Link to='/logout' style={{ textDecoration: "none", marginRight: 20 }}><div style={{ backgroundColor: 'gray', marginRight: 400, width: 800, height: 50, color: 'white' }}>{localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName')}<br />Logout</div> </Link>
          <Switch>
            <Route path="/logout" component={Logout} />
          </Switch>
        </Router >
      </div >
    )
  }
}

export default loginHeader
