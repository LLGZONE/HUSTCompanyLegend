import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'
import { REQUEST, FAILURE, SUCCESS } from './index'

export const PUBLISH = createRequestTypes('EXERCITATION_PUBLISH')
export const POSTS_LIST = createRequestTypes('POSTS_LIST')

export const publish = {
  request: (info) => action(PUBLISH[REQUEST], {info}),
  success: () => action(PUBLISH[SUCCESS]),
  failure: error => action(PUBLISH[FAILURE], error),
}

export const postsLists = {
  request: (page) => action(POSTS_LIST[REQUEST], {page}),
  success: (posts) => action(POSTS_LIST[SUCCESS], {posts}),
  failure: error => action(POSTS_LIST[FAILURE], error),
}