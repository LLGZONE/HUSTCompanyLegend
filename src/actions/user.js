import action from '../utils/action'
import createReqTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

export const LOGIN = createReqTypes('LOGIN')
export const LOGOUT = createReqTypes('LOGOUT')
export const REGISTER = createReqTypes('REGISTER')

export const login = {
  request: (username, password, loginType) => action(LOGIN[REQUEST], {username, password, loginType}),
  success: (uid, loginType) => action(LOGIN[SUCCESS], {uid, loginType}),
  failure: error => action(LOGIN[FAILURE], {error}),
}

export const logout = {
  request: (uid) => action(LOGOUT[REQUEST], {uid}),
  success: () => action(LOGOUT[SUCCESS]),
  failure: error => action(LOGOUT[FAILURE], {error}),
}

export const register = {
  request: ({username, email, password, phone, identity, gid}) => action(REGISTER[REQUEST], {username, email, password, phone, identity, gid}),
  success: () => action(REGISTER[SUCCESS]),
  failure: error => action(REGISTER[FAILURE], error),
}