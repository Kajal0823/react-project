import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogin } from "../actions/loginAction";
import browserHistory from 'react-router'
import Profile from './Profile';

class login extends Component {

    componentDidMount() {
        //this.props.dispatch(fetchLogin())

    };
    constructor(props) {
        super(props)
        console.log(this.state)
        this.state = {
            username: '',
            password: '',
        }
    }


    render() {
        const { error, loading, success, logindata } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        if (loading) {
            return <div>Loading...</div>;
        }
        if (success == true) {
            return <Profile profileData={this.props.logindata} />
        }

        return (
            <div>

                <div>
                    <input type='text' placeholder='UserName' value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} /><br></br><br></br>
                    <input type='text' placeholder='Password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} /><br></br><br></br>
                    <button onClick={() => this.props.dispatch(fetchLogin(this.state.username, this.state.password))}>Login</button>

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
        loading: state.loginReducer.loading,
        error: state.loginReducer.error

    }
}
// login.contextType = {
//     router: React.propTypes.object.isRequired
// }
export default connect(mapStateToProps)(login)
