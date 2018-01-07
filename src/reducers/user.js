import { LOGIN, LOGOUT, REGISTER } from '../actions/user'
import { FAILURE, REQUEST, SUCCESS } from '../actions'

const user = (state = {
  isLogin: false,
  username: '',
  userType: '',
  password: '',
  uid: '',
  isFetching: false,
  error: '',
  registerMsg: null,
}, action) => {
  switch (action.type) {
    case LOGOUT[SUCCESS]:
      return {
        ...state,
        isLogin: false,
      }
    case LOGIN[REQUEST]:
      return {
        ...state,
        username: action.username,
        password: action.password,
        userType: action.userType,
        isFetching: true,
        error: '',
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
        userType: '',
        uid: '',
        username: '',
        error: action.error,
      }
    case REGISTER[REQUEST]:
      return {
        ...state,
        isFetching: true,
        registerMsg: null,
      }
    case REGISTER[SUCCESS]:
      return {
        ...state,
        isFetching:false,
        registerMsg: '注册成功',
      }
    case REGISTER[FAILURE]:
      return {
        ...state,
        isFetching: false,
        registerMsg: action.error || '注册失败',
      }
    default:
      return state
  }
}

export default user