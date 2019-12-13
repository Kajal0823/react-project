import listReducer from './listReducer'
import loginReducer from './loginReducer'
import { combineReducers } from 'redux'
const allReducer = combineReducers({
  listReducer: listReducer,
  loginReducer: loginReducer
})
export default allReducer;