import {combineReducers} from 'redux'
import user from './user'
import exercitation from './exercitation'

export default combineReducers({
  home: (state = {}, action) => (state),
  user,
  exercitation,
})