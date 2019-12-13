//const BASE_URL = "http://52.15.197.226:8080"
import { BASE_URL } from '../constants/baseUrl'

//util
export const prepareRequestBody = (data, method, headerType = '') => {
  let headers = { 'Content-Type': 'application/json' };
  const token1 = localStorage.getItem('jwtToken')
  if (headerType === 'auth') {
    headers = new Headers({
      Authorization: `Bearer ${token1}`
    });
  }
  return {
    method: method || 'POST',
    headers: headers,
    body: JSON.stringify(data)
  };
}
export const prepareRequestWithOutBody = (method, headerType = '') => {
  let headers = { 'Content-Type': 'application/json' };
  const token1 = localStorage.getItem('jwtToken')
  if (headerType === 'auth') {
    headers = new Headers({
      Authorization: `Bearer ${token1}`
    });
  }
  return {
    method: method || 'POST',
    headers: headers,
  };
}

//util
export const prepareUrl = (path, option = '') => {
  return `${BASE_URL}${path}${option}`;
};
//util
export const prepareAPICall = (url, body, callBackSuccess, callBackError, dispatch) => {
  return fetch(url, body)
    .then(handleErrors)
    .then(res => res.json())
    .then(response => { callBackSuccess(dispatch, response); })
    .catch(error => callBackError(dispatch, error));
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

