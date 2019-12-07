import {
    FETCH_LIST_BEGIN,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE,
    FETCH_STATUS_COUNT,
    FETCH_COUNT_SUCCESS,

} from '../actions/listAction';
const initialState = {
    items: [],
    count: [],
    status: [],
    loading: false,
    error: null
};

export default function listReducer(state = initialState, action) {
    console.log('aaaaaccctt', action)
    switch (action.type) {
        case FETCH_LIST_BEGIN:
            // Mark the state as "loading" so we can show a spinner or something
            // Also, reset any errors. We're starting fresh.
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_LIST_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                items: action.payload

            };
        case FETCH_COUNT_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                count: action.payload
            };
        case FETCH_STATUS_COUNT:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                loading: false,
                status: action.payload
            };

        case FETCH_LIST_FAILURE:
            // The request failed. It's done. So set loading to "false".
            // Save the error, so we can display it somewhere.
            // Since it failed, we don't have items to display anymore, so set `items` empty.
            //
            // This is all up to you and your app though:
            // maybe you want to keep the items around!
            // Do whatever seems right for your use case.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}