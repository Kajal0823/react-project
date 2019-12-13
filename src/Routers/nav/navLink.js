import NavData from '../../constants/NavData'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const NavLink = (props) => {
  const { hrefName, toLink, Name } = props
  return (
    <ul id="nav-mobile" >

      <li key={Name}>
        <a href={hrefName}><Link to={toLink}>{Name}</Link></a>
      </li>
    </ul>
  )
}
class Nav extends Component {
  render() {
    const showData = NavData.map((link) => {
      return <NavLink {...link} />
    })
    return (

      <div>
        <nav>
          <div class="nav-wrapper">
            {showData}
          </div>
        </nav>
      </div >
    )
  }
}
export default Nav
