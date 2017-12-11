import action from '../utils/action'
import createReqTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

export const LOGIN = createReqTypes('LOGIN')

export const login = {
  request: (username, password) => action(LOGIN[REQUEST], {username, password}),
  success: (uid) => action(LOGIN[SUCCESS], {uid}),
  failure: (error) => action(LOGIN[FAILURE], {error})
}