import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchLogin, loginSucess, logoutUser } from "../actions/loginAction";
import browserHistory from 'react-router'
import Profile from '../pages/Profile';
import { bindActionCreators, compose } from 'redux'


class login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  handleLogin = () => {
    const { username, password } = this.state;
    this.props.dispatch(
      fetchLogin(username, password)
    )
  }

  render() {
    const { error, loading, success, dispatch, logindata, history } = this.props;
    const { username } = this.state;
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (loading) {
      return <div>Loading...</div>;
    }
    if (success == true) {
      return <Profile profileData={this.props} />
    }

    return (
      <div>

        <div>
          <input type='text' placeholder='UserName' value={username} onChange={(e) => this.setState({ username: e.target.value })} /><br></br><br></br>
          <input type='text' placeholder='Password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} /><br></br><br></br>
          <button onClick={this.handleLogin}>Login</button>

        </div>


      </div>
    )
  }
}

const mapStateToProps = (state, history, location) => {
  return {
    logindata: state.loginReducer.logindata,
    success: state.loginReducer.success,
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
    history: history

  }
}

export default withRouter(connect(mapStateToProps)(login))
