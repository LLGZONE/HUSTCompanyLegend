import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

export const PUBLISH = createRequestTypes('EXERCITATION_PUBLISH')
export const POSTS_LIST = createRequestTypes('POSTS_LIST')
export const POSTS_QUERY = createRequestTypes('POSTS_QUERY')
export const QUERY_FILTER_CHANGE = 'QUERY_FILTER_CHANGE'

export const publish = {
  request: (info) => action(PUBLISH[REQUEST], {info}),
  success: () => action(PUBLISH[SUCCESS]),
  failure: error => action(PUBLISH[FAILURE], error),
}

export const postsLists = {
  request: (page) => action(POSTS_LIST[REQUEST], {page}),
  success: (posts) => action(POSTS_LIST[SUCCESS], {posts}),
  failure: error => action(POSTS_LIST[FAILURE], {error}),
}

export const query = {
  request: ({queryString='', filter={}}) => action(POSTS_QUERY[REQUEST], {queryString, filter}),
  success: (posts) => action(POSTS_QUERY[SUCCESS], {posts}),
  failure: error => action(POSTS_QUERY[FAILURE], {error})
}

export function queryFilter(filter) {
  return {
    type: QUERY_FILTER_CHANGE,
    filter: filter,
  }
}