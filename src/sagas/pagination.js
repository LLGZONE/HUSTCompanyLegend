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
export function * fetchList(type, page) {
  try {
    const {response} = yield call(fetchListApi, type, page)
    console.log(response)
    if (response) {
      yield put(pagination.success(type, page, response, response.length))
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
    const { pageType: type } = action
    const page = 1
    const list = yield select(getPageList(type, page))
    if (list.length === 0) {
      yield call(fetchList, type, page)
    }
  }
}

export default list