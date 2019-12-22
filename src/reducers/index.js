import { combineReducers } from 'redux'
import activityReducer from './activityReducer'
import eventReducer from './eventReducer'
import userReducer from './userReducer'

export default combineReducers({
  activity: activityReducer,
  user: userReducer,
  event: eventReducer
})

/*each key (user:)will point to one reducer (UserReducer)*/
