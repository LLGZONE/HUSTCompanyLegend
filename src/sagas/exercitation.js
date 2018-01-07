import { take, put, call, fork, select } from 'redux-saga/effects'
import { BASE_URL } from '../config/url'
import { REQUEST } from '../actions'
import { query, POSTS_QUERY } from '../actions/exercitation'
import fetchEntity from '../utils/fetchEntity'
import { getPostsQuery } from '../reducers/selectors'
import { pagination } from '../actions/pagination'
import {fetchList} from './pagination'

import {delay} from 'redux-saga'

function fetchFilteredPostsApi(info) {
  const url = `${BASE_URL}/query`
  const header = {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetchEntity(url, header)
}

function * fetchFilteredPosts(queryString, filter) {
  const info = {
    queryString,
    filter,
  }
  try {
    const { response } = yield call(fetchFilteredPostsApi, info)
    if (response && response.code === 200) {
      yield put(query.success(response.posts))
      yield put(pagination.success('post', 1, response.posts))
    } else {
      yield put(query.failure(response.code))
    }
  }
  catch (err) {
    yield put(query.failure('internet'))
  }
}

function* filterS(queryString, filter) {
  const list = yield select(state=> {
    const posts = state.reducers.pagination.intership
    return posts && posts.page[1]
  })
  const result = list.filter(item => {
    return item.isname.includes(queryString)
  })
  yield delay(1500)
  yield put(query.success(result))
  yield put(pagination.success('intership', 1, result, list.length))
}

function * watchFilteredPosts() {
  while (true) {
    yield take(POSTS_QUERY[REQUEST])
    yield put(pagination.reset('intership'))
    yield call(fetchList, 'intership', 1)
    const {queryString, filter} = yield select(getPostsQuery)
    yield call(filterS, queryString, filter)
  }
}

function * exercitation() {
  yield fork(watchFilteredPosts)
}

export default exercitation