import {
  FETCH_API,
  GET,
  POST

} from '../actions/apiActions';

const initalState = {
  url = "",
  method = "POST",
  data = null,
  accessToken = null,

}
const apiReducer = (state = initalState, action) => {
  console.log('loginaction', action)
  switch (action.type) {
    case FETCH_API:
      return {
        url: action.payload,
        method: action.payload,
        data: action.payload,
        accessToken: action.payload

      }
    default:
      return state;
  }
}
export default apiReducer;