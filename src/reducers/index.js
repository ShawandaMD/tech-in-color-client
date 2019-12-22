import { combineReducers } from 'redux'
import activityReducer from './activityReducer'
import eventReducer from './eventReducer'
import userReducer from './userReducer'

export default combineReducers({
  activityReducer,
  userReducer,
  eventReducer
})
