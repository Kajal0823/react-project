import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/loginAction'
import Login from './login'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Header extends Component {
  componentDidMount() {
  }
  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("jwtToken")

    this.props.logoutUser()
    console.log(this.props.logout)

    if (this.props.logout == true) {
      return <Redirect to='/login' />;
    }

  }
  render() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName')

    const { success, logindata, logout } = this.props;

    return (
      <div>
        <div>
          <div style={{ backgroundColor: 'yellow', width: 1000, height: 40 }}><span style={{ marginLeft: 800, fontFamily: 'bold' }}>{firstName + ' ' + lastName}</span>
            <br></br><span onClick={this.handleClick}>logout</span>

          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log("satate:Error ", state)
  console.log("loginReducer: ", state.loginReducer);
  return {
    logindata: state.loginReducer.logindata,
    success: state.loginReducer.success,
    logout: state.loginReducer.logout
  }
}
const mapDispatchToProps = dispatch =>
  ({
    logoutUser: () => dispatch(logoutUser())
  })
export default connect(mapStateToProps, mapDispatchToProps)(Header)
