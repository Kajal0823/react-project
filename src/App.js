import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComplainList from './comp/ComplainList'
import Nav from './comp/Nav';
import browserHistory from 'react-router'
import { history } from './history';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ParentComponent from './comp/ParentComponent';
import Login from './comp/login'
import { useSelector, useDispatch } from 'react-redux'


function App() {
  const islogin = useSelector(state => state.loginReducer.success)
  const dispatch = useDispatch()
  //console.log('main', islogin)
  return (
    <div className="App">
      <h1>{islogin}</h1>
      <Router history={history}>
        <Nav />
        <Switch>
          <Route path="/about" render={() => (islogin ? <ParentComponent /> : (<Redirect to="/login" />))}>
          </Route>
          <Route path="/home" render={() => (islogin ? <ParentComponent /> : (<Redirect to="/login" />))}>
          </Route>
          <Route path="/listing" render={() => (islogin ? <ComplainList /> : (<Redirect to="/login" />))}>

          </Route>
          <Route path="/login" render={() => (islogin ? <Login /> : (<Redirect to="/listing" />))}>
            <Login />
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
