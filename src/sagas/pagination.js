import { take, put, call, select } from 'redux-saga/effects'
import { BASE_URL } from '../config/url'
import { REQUEST } from '../actions'
import fetchEntity from '../utils/fetchEntity'
import { PAGINATION, pagination } from '../actions/pagination'
import { getPageList } from '../reducers/selectors'

function fetchListApi(type, page) {
  const url = `${BASE_URL}/${type}/getList/${page}`

  return fetchEntity(url)
}

//work saga
function * fetchList(type, page) {
  try {
    const {response} = yield call(fetchListApi, type, page)
    if (response) {
      yield put(pagination.success(type, page, response.list))
    } else {
      yield put(pagination.failure(type, {msg: 'internet'}))
    }
  }
  catch (e) {
    yield put(pagination.failure(type, e))
  }
}

//watch saga
function * list() {
  while (true) {
    const action = yield take(PAGINATION[REQUEST])
    const { page, pageType: type } = action
    const list = yield select(getPageList(type, page))
    if (list.length === 0) {
      yield call(fetchList, type, page)
    }
  }
}

export default list