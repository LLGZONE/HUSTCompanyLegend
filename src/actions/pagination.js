import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

export const PAGINATION = createRequestTypes('PAGINATION')

export const pagination = {
  request: (pageType, page) => action(PAGINATION[REQUEST], {page, pageType}),
  success: (pageType, list) => action(PAGINATION[SUCCESS], {list}),
  failure: (pageType, error) => action(PAGINATION[FAILURE], {error}),
}