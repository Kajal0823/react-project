export const FETCH_LOGIN_BEGIN = 'FETCH_LOGIN_BEGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE';
export const FETCH_LOGOUT = 'FETCH_LOGOUT';

// import { createBrowserHistory } from 'history'
//import { browserHistory } from '../index';
const BASE_URL = 'http://52.15.197.226:8080'
export const loginBegin = () => {

    return {
        type: FETCH_LOGIN_BEGIN,

    }
}
export const loginSucess = (data) => {
    console.log("action", data)
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: data
    }

}
export const loginError = (error) => {
    return {
        type: FETCH_LOGIN_FAILURE,
        payload: { error }

    }
}
export const logoutUser = () => {
    return {
        type: FETCH_LOGOUT,

    }
}

export function fetchLogin(username, password) {
    const LOGIN_URL = "/user/auth/login?"
    const methodType = LOGIN_URL ? "GET" : "POST"
    console.log("fatch login", JSON.stringify({ username, password }))
    return dispatch => {
        dispatch(loginBegin());
        return fetch(`${BASE_URL}${LOGIN_URL}`,
            {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log("json data", json.length)
                dispatch({ type: FETCH_LOGIN_SUCCESS, payload: json });
                const token = json.accessToken;
                console.log(token);
                localStorage.setItem('jwtToken', token);


                //localStorage.setItem('Auth', JSON.stringify(res.accessToken))
                //browserHistory.push('/dashboard/' + response.data.id);

                //browserHistory.push('/about')
                return json.data;
            })
            .catch(error => dispatch(loginError(error)));
    };
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}