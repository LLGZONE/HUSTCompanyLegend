import {combineReducers} from 'redux'
import user from './user'

export default combineReducers({
  home: (state = {}, action) => (state),
  user,
})