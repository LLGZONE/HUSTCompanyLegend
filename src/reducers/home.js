import * as ActionTypes from '../actions/home'
import {combineReducers} from 'redux'

const feature = (state = {
  exchange: undefined,
  base: undefined,
  help: undefined,
}, action) => {
  switch(action.type) {
    default: return state
  }
}

export default combineReducers({
  feature,
})