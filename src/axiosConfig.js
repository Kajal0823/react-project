//First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
    // .. where we make our configurations
    baseURL: 'http://52.15.197.226:8080'
});

// Where you would set stuff like your 'Authorization' header, etc ...
const token = localStorage.getItem('jwtToken')
instance.defaults.headers.common['Authorization'] = token;

// Also add/ configure interceptors && all the other cool stuff

export default instance;
