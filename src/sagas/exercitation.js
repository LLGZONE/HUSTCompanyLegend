import { take, put, call, fork, select } from 'redux-saga/effects'
import { BASE_URL } from '../config/url'
import { REQUEST } from '../actions'
import { query, POSTS_QUERY } from '../actions/exercitation'
import fetchEntity from '../utils/fetchEntity'
import { getPostsQuery } from '../reducers/selectors'

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
    } else {
      yield put(query.failure(response.code))
    }
  }
  catch (err) {
    yield put(query.failure('internet'))
  }
}

function * watchFilteredPosts() {
  while (true) {
    yield take(POSTS_QUERY[REQUEST])
    const {queryString, filter} = yield select(getPostsQuery)
    yield call(fetchFilteredPosts, queryString, filter)
  }
}

function * exercitation() {
  yield fork(watchFilteredPosts)
}

export default exercitation