import { curry } from 'lodash/function'
import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

const RESET = 'RESET'
const PAGINATION = createRequestTypes('PAGINATION')
PAGINATION[RESET] = RESET

export const pagination = {
  request: curry((pageType, page) => action(PAGINATION[REQUEST], { page, pageType })),
  success: (pageType, page, list, pageCount) => action(PAGINATION[SUCCESS], { pageType, page, list, pageCount }),
  failure: (pageType, error) => action(PAGINATION[FAILURE], { pageType, error }),
  reset: (pageType) => action(PAGINATION[RESET], { pageType }),
}

export { PAGINATION }