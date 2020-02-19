import { combineReducers } from 'redux';
import activityReducer from './activityReducer';
import eventReducer from './eventReducer';
import userReducer from './userReducer';
import currentUser from './currentUserReducer';
import loginForm from './loginForm';
import signupForm from './signupForm'

export default combineReducers({
  activityReducer,
  userReducer,
  eventReducer,
  currentUser,
  loginForm,
  signupForm
})

/*each key (user:)will point to one reducer (UserReducer)*/
