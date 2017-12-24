import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

const RESET = 'RESET'
const PAGINATION = createRequestTypes('PAGINATION')
PAGINATION[RESET] = RESET

export const pagination = {
  request: (pageType, page) => action(PAGINATION[REQUEST], {page, pageType}),
  success: (pageType, list) => action(PAGINATION[SUCCESS], {list}),
  failure: (pageType, error) => action(PAGINATION[FAILURE], {error}),
  reset: (pageType) => action(PAGINATION[RESET])
}

export { PAGINATION }