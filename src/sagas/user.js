import { take, put, call, fork, select } from 'redux-saga/effects'
import { login, logout, LOGOUT, LOGIN } from '../actions/user'
import { BASE_URL } from '../config/url'
import { REQUEST } from '../actions'
import { getUserInfo } from '../reducers/selectors'
import fetchEntity from '../utils/fetchEntity'

function fetchLoginApi(info) {
  const url = `${BASE_URL}/user/login`
  const header = {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetchEntity(url, header)
}

function fetchLogoutApi() {
  const url = `${BASE_URL}/user/logout`
  return fetchEntity(url)
}

//work saga
function * fetchLogin(info) {
  const { response, error } = yield call(fetchLoginApi, info)
  if (response && response.code === 200) {
    yield put(login.success())
  } else {
    yield put(login.failure(error))
  }
}

//watch saga
function * userLogout() {
  while (true) {
    yield take(LOGOUT[REQUEST])
    yield call(fetchLogoutApi)
    yield put(logout.success())
  }
}

function * userLogin() {
  while (true) {
    yield take(LOGIN[REQUEST])
    const userInfo = yield select(getUserInfo)
    yield call(fetchLogin, userInfo)
  }
}

function * user() {
  yield fork(userLogout)
  yield fork(userLogin)
}

export default user