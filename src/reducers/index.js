import {combineReducers} from 'redux'
import user from './user'
import pagination from './pagination'
import exercitation from './exercitation'
import company from './company'

export default combineReducers({
  home: (state = {}, action) => (state),
  user,
  exercitation,
  pagination: pagination(),
  company
})