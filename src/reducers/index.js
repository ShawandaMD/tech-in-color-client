import { combineReducers } from 'redux'
import activityReducer from './activityReducer'
import eventReducer from './eventReducer'
import userReducer from './userReducer'
import currentUser from './currentUserReducer'
import loginForm from './loginForm

export default combineReducers({
  activity: activityReducer,
  user: userReducer,
  event: eventReducer,
  currentUser
  loginForm
})

/*each key (user:)will point to one reducer (UserReducer)*/
