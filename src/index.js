import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import listReducer from './reducers/listReducer'
import allReducer from './reducers/index'
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom'
export const browserHistory = createBrowserHistory();
//import axios from 'axios'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)));
//axios.defaults.baseURL = 'http://52.15.197.226:8080';
// const token = localStorage.getItem('jwtToken')
// axios.defaults.headers.common['Authorization'] = token;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
