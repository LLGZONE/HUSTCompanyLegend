import { LOGIN, LOGOUT } from '../actions/user'
import { FAILURE, REQUEST, SUCCESS } from '../actions'

const user = (state = {
  isLogin: false,
  username: '',
  type: 'company',
  password: '',
  uid: '',
  isFetching: false,
}, action) => {
  switch (action.type) {
    case LOGOUT[SUCCESS]:
      return {
        ...state,
        isLogin: false,
        isFetching: false,
      }
    case LOGIN[REQUEST]:
      return {
        ...state,
        username: action.username,
        password: action.password,
        type: action.loginType,
        isFetching: true,
      }
    case LOGIN[SUCCESS]:
      return {
        ...state,
        isLogin: true,
        type: action.loginType,
        uid: action.uid,
        isFetching: false,
      }
    case LOGIN[FAILURE]:
      return {
        ...state,
        isLogin: false,
        type: 'company',
        uid: '',
        username: '',
      }
    default:
      return state
  }
}

export default user