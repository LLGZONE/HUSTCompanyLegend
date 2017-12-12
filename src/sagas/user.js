import { take, put, call, fork, select } from 'redux-saga/effects'
import { login, logout, LOGOUT, LOGIN } from '../actions/user'
import { BASE_URL } from '../config/url'
import { REQUEST } from '../actions'
import { getUserInfo } from '../reducers/selectors'

function fetchLoginApi(info) {
  return fetch(`${BASE_URL}/user/register`, {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
}

function fetchLogoutApi() {
  return fetch(`${BASE_URL}/user/logout`)
    .then(response => response.json())
}

//work saga
function * fetchLogin(info) {
  yield call(fetchLoginApi, info)
  yield put(login.success())
}

//watch saga
function * userLogout() {
  while (true) {
    yield take(LOGOUT[REQUEST])
    yield call(fetchLogoutApi)
  }
}

function * userLogin() {
  while (true) {
    yield take(LOGIN[REQUEST])
    const userInfo = select(getUserInfo)
    yield call(fetchLogin, userInfo)
  }
}

function * user() {
  yield fork(userLogout)
  yield fork(userLogin)
}

export default user