import React, { Component } from 'react'
import SideNav from 'react-simple-sidenav';
import Profile from './Profile';
import ComplainList from '../components/Complain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ExpandList from './ExpandList';

export class sideHeder extends Component {

  render() {
    return (
      <div >
        <div style={{ width: 50, height: 900, backgroundColor: 'blue', marginBottom: 100 }}>
          <Router  >
            <Link style={{ width: 30, color: '#fff', backgroundColor: 'blue', marginRight: 20 }} to='/deshbord'>Home</Link><br></br>
            <Link style={{ width: 30, color: '#fff', backgroundColor: 'blue' }} to='/list'>complains</Link>

            <Route path="/deshbord" component={ExpandList} />
            <Route path="/list" component={ComplainList} />


          </Router>
        </div>
        {/* <SideNav
                    title="Simple Sidenav"
                    items={['Item 1', 'Item 2']}
                /> */}

      </div>
    )
  }
}
function Home() {
  return (
    <div>
      Home Component
        </div>
  )
}
export default sideHeder
