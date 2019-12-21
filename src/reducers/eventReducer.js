import userReducer from  './userReducer';
import activitiyReducer from './activitiyReducer';
import eventReducer from './eventReducer'
import {combineReducers} from 'redux'

export default combineReducers({userReducer,
   activitiyReducer,
   eventReducer})
