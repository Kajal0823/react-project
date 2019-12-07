import {
    FETCH_LOGIN_BEGIN,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGOUT

} from '../actions/loginAction';
import { browserHistory } from 'react-router';


const initalState = {
    loading: false,
    error: null,
    success: false,
    logindata: [],
    logout: false
}
const loginReducer = (state = initalState, action) => {
    console.log('loginaction', action)
    switch (action.type) {
        case FETCH_LOGIN_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                logindata: action.payload
            }
        case FETCH_LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.error,

            }
        case FETCH_LOGOUT:
            return {
                ...state,
                logout: true
            }

        default:
            return state;
    }
}
export default loginReducer;