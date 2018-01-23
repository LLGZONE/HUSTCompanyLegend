import action from '../utils/action'
import createReqTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

export const LOGIN = createReqTypes('LOGIN')
export const LOGOUT = createReqTypes('LOGOUT')
export const REGISTER = createReqTypes('REGISTER')

export const login = {
  request: (username, password, userType) => action(LOGIN[REQUEST], {username, password, userType}),
  success: uid => action(LOGIN[SUCCESS], {uid}),
  failure: error => action(LOGIN[FAILURE], {error}),
}

export const logout = {
  request: (uid) => action(LOGOUT[REQUEST], {uid}),
  success: () => action(LOGOUT[SUCCESS]),
  failure: error => action(LOGOUT[FAILURE], {error}),
}

export const register = {
  request: ({email, password, phone, identity, verify, usertype}) => action(REGISTER[REQUEST], {email, password, phone, identity, verify, usertype}),
  success: () => action(REGISTER[SUCCESS]),
  failure: error => action(REGISTER[FAILURE], {error}),
}