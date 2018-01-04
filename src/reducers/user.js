import { LOGIN, LOGOUT, REGISTER } from '../actions/user'
import { FAILURE, REQUEST, SUCCESS } from '../actions'

const user = (state = {
  isLogin: false,
  username: '',
  type: 'company',
  password: '',
  uid: '',
  isFetching: false,
  error: false,
  registerError: false
}, action) => {
  switch (action.type) {
    case LOGOUT[SUCCESS]:
      return {
        ...state,
        isLogin: false
      }
    case LOGIN[REQUEST]:
      return {
        ...state,
        username: action.username,
        password: action.password,
        type: action.loginType,
        isFetching: true,
        error: false,
      }
    case LOGIN[SUCCESS]:
      return {
        ...state,
        isLogin: true,
        uid: action.uid,
        isFetching: false,
      }
    case LOGIN[FAILURE]:
      return {
        ...state,
        isFetching: false,
        isLogin: false,
        type: 'company',
        uid: '',
        username: '',
        error: true,
      }
    case REGISTER[REQUEST]:
      return {
        ...state,
        isFetching: true,
        registerError: false,
      }
    case REGISTER[SUCCESS]:
      return {
        ...state,
        isFetching:false,
      }
    case REGISTER[FAILURE]:
      return {
        ...state,
        isFetching: false,
        registerError: true,
      }
    default:
      return state
  }
}

export default user