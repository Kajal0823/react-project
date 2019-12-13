import { prepareRequestBody, prepareUrl, prepareAPICall } from '../Utilites/utils'
import { FETCH_LOGIN_BEGIN, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, FETCH_LOGIN_FAILURE } from '../constants/Constants'
import { LOGIN_URL } from '../constants/login'
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
// action: keep in action
const callBackSuccess = (dispatch, json) => {
  dispatch({ type: FETCH_LOGIN_SUCCESS, payload: json });
  const token = json.accessToken;
  const firstName = json.firstName;
  const lastName = json.lastName;
  const role = json.role;
  localStorage.setItem('jwtToken', token);
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('role', role);
  return json.data;
}
const callBackError = (dispatch, error) => {
  dispatch(loginError(error))
}
export function fetchLogin(username, password) {
  const data = { username, password }
  const url = prepareUrl(LOGIN_URL);
  const body = prepareRequestBody(data)
  return dispatch => {
    prepareAPICall(url, body, callBackSuccess, callBackError, dispatch);
  }
};