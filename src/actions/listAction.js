import { COMPLAIN_LIST_URL, COMPLAIN_COUNT_URL, COMPLAIN_STATUS_URL } from '../constants/complainList'

import { prepareRequestBody, prepareRequestWithOutBody, prepareUrl, prepareAPICall } from '../Utilites/utils'
export const FETCH_LIST_BEGIN = 'FETCH_LIST_BEGIN';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';
export const FETCH_COUNT_SUCCESS = 'FETCH_COUNT_SUCCESS';
export const FETCH_STATUS_COUNT = 'FETCH_STATUS_COUNT';

export const fetchListBegin = () => ({
  type: FETCH_LIST_BEGIN
});

export const fetchListSuccess = data => ({
  type: FETCH_LIST_SUCCESS,
  payload: { data }
});

export const fetchCountSuccess = count => ({
  type: FETCH_COUNT_SUCCESS,
  payload: { count }
});

export const fetchStatusCount = status => ({
  type: FETCH_STATUS_COUNT,
  payload: { status }
});

export const fetchListFailure = error => ({
  type: FETCH_LIST_FAILURE,
  payload: { error }
});

const callBackSuccess = (dispatch, data) => {
  dispatch({ type: FETCH_LIST_SUCCESS, payload: data });
  return data;
}
const callBackCountSuccess = (dispatch, data) => {
  dispatch({ type: FETCH_COUNT_SUCCESS, payload: data });
  return data;
}
const callBackStatusSuccess = (dispatch, data) => {
  dispatch({ type: FETCH_STATUS_COUNT, payload: data });
  return data;
}

const callBackError = (dispatch, error) => {
  dispatch(fetchListFailure(error))
}
export function fetchList(key = '') {
  const url = prepareUrl(COMPLAIN_LIST_URL, key);
  const body = prepareRequestBody('', 'POST', 'auth')
  return dispatch => {
    prepareAPICall(url, body, callBackSuccess, callBackError, dispatch);
  }

}
export function fetchCount() {
  const url = prepareUrl(COMPLAIN_COUNT_URL);
  const body = prepareRequestWithOutBody('GET', 'auth')
  return dispatch => {
    prepareAPICall(url, body, callBackCountSuccess, callBackError, dispatch);
  }
}
export function fetchStatus() {
  const url = prepareUrl(COMPLAIN_STATUS_URL);
  const body = prepareRequestWithOutBody('GET', 'auth')
  return dispatch => {
    prepareAPICall(url, body, callBackStatusSuccess, callBackError, dispatch);
  }
}
