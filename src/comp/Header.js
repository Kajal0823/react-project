import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/loginAction'
import Login from './login'
export class Header extends Component {

    handleClick = event => {
        event.preventDefault()
        // Remove the token from localStorage
        localStorage.removeItem("jwtToken")

        // Remove the user object from the Redux store

        this.props.logoutUser()
        console.log('logggoutttt')

    }
    render() {


        const { success, logindata, logout } = this.props;
        console.log('login', logindata)

        return (
            <div>
                <div>
                    <div style={{ backgroundColor: 'yellow', width: 1000, height: 40 }}><span style={{ marginLeft: 800, fontFamily: 'bold' }}>{logindata.firstName + ' ' + logindata.lastName}</span>
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
const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)



// import React from 'react'
// //localStorage.removeItem('jwtToken')
// import { useSelector, useDispatch } from 'react-redux'
// import Login from '../comp/login'
// function Header() {
//     const user = useSelector(state => state.loginReducer.logindata)
//     const dispatch = useDispatch()
//     console.log('main', user.firstName);
//     handleClick = event => {
//         event.preventDefault()
//         // Remove the token from localStorage
//         localStorage.removeItem("jwtToken")
//         // Remove the user object from the Redux store
//         this.props.logoutUser()
//       }

//     return (
//         <div>
//             <div style={{ backgroundColor: 'yellow', width: 1000, height: 40 }}><span style={{ marginLeft: 800, fontFamily: 'bold' }}>{user.firstName + ' ' + user.lastName}</span>
//             <br></br><span onClick={}>logout</span></div>
//         </div>
//     )
// }


// export default Header
