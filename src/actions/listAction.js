const token1 = localStorage.getItem("jwtToken");

export const FETCH_LIST_BEGIN = 'FETCH_LIST_BEGIN';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';
export const FETCH_COUNT_SUCCESS = 'FETCH_COUNT_SUCCESS';
export const FETCH_STATUS_COUNT = 'FETCH_STATUS_COUNT';

const BASE_URL = 'http://52.15.197.226:8080'

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
// export const fetchCompalainCount = complainCount => ({
//     type: FETCH_COMPLAIN_COUNT,
//     payload: { complainCount }
// });

export const fetchStatusCount = status => ({
    type: FETCH_STATUS_COUNT,
    payload: { status }
});

export const fetchListFailure = error => ({
    type: FETCH_LIST_FAILURE,
    payload: { error }
});

export function fetchList(key = '') {
    const methodType = key === '' ? "GET" : "POST"
    return dispatch => {
        dispatch(fetchListBegin());
        return fetch(`${BASE_URL}/complainbox/list/${key}`,
            {
                method: methodType,
                headers: new Headers({
                    Authorization: `Bearer ${token1}`
                })
            })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log("json data", json.length)

                dispatch({ type: FETCH_LIST_SUCCESS, payload: json });

                return json.data;
            })
            .catch(error => dispatch(fetchListFailure(error)));
    };
}
export function fetchCount() {

    const COUNT_URL = "/complainbox/count?"
    const methodType = COUNT_URL ? "GET" : "POST"

    return dispatch => {
        dispatch(fetchListBegin());
        return fetch(`${BASE_URL}${COUNT_URL}`,
            {
                method: methodType,
                headers: new Headers({
                    Authorization: `Bearer ${token1}`
                })
            })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch({ type: FETCH_COUNT_SUCCESS, payload: json });

                return json.data;
            })
            .catch(error => dispatch(fetchListFailure(error)));
    };
}
export function fetchStatus() {
    const COUNT_STATUS_URL = "/complainbox/count/status?"
    const methodType = COUNT_STATUS_URL ? "GET" : "POST"

    return dispatch => {
        return fetch(`${BASE_URL}${COUNT_STATUS_URL}`,
            {
                method: methodType,
                headers: new Headers({
                    Authorization: `Bearer ${token1}`
                })
            })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch({ type: FETCH_STATUS_COUNT, payload: json });
                return json.data;
            })
            .catch(error => dispatch(fetchListFailure(error)));
    };
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}