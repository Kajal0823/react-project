import React, { Component } from 'react'
import Header from '../components/Header'
import SideHeder from './sideHeder'
import Login from '../components/login'
import LoginHeader from '../Routers/loginHeader'
import Footer from './footer'

export class Profile extends Component {

  render() {

    return (
      <div>
        <LoginHeader />
        <h1>Body</h1>
        <Footer />
      </div>
    )
  }
}

export default Profile
