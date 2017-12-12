import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

export const PUBLISH = createRequestTypes('EXERCITATION_PUBLISH')

export const publish = {
  request: info => action(PUBLISH[REQUEST], info),
  success: () => action(PUBLISH[SUCCESS]),
  failure: error => action(PUBLISH[FAILURE], error),
}