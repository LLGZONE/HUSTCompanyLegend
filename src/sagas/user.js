import { take, put, call, fork, select, takeLatest } from 'redux-saga/effects'
import { login, logout, LOGOUT, LOGIN, register, REGISTER } from '../actions/user'
import { BASE_URL } from '../config/url'
import { REQUEST } from '../actions'
import { getUserInfo } from '../reducers/selectors'
import fetchEntity from '../utils/fetchEntity'

function fetchRegisterApi(info) {
  const url = `${BASE_URL}/user/register`
  const option = {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetchEntity(url, option)
}

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

  return fetch(url)
    .then(response => response)
}

//work saga
function * fetchLogin(info) {
  try {
    const { response } = yield call(fetchLoginApi, info)
    if (response && response.uid) {
      //实际上要使用jwt，后端没有先用着
      const expireTime = 3600 * 1000 * 100 // 100小时
      localStorage.setItem('uid', response.uid)
      localStorage.setItem('type', info.type)
      localStorage.setItem('expire', expireTime.toString())
      localStorage.setItem('last', Date.now().toString())
      yield put(login.success(response.uid))
    } else {
      yield put(login.failure())
    }
  }
  catch (e) {
    yield put(login.failure(e))
  }
}

function * fetchRegister(info) {
  try {
    const response = yield call(fetchRegisterApi, info)
    console.log(response)
    console.log(response)
    if (response.status === 200) {
      yield put(register.success())
    } else {
      yield put(register.failure())
    }
  }
  catch (e) {
    yield put(register.failure())
  }
}

//watch saga
function * userLogout() {
  while (true) {
    yield take(LOGOUT[REQUEST])
    try {
      yield call(fetchLogoutApi)
      yield put(logout.success())
      localStorage.clear()
    }
    catch (err) {
      yield put(logout.failure(err))
    }
  }
}

function * userLogin() {
  while (true) {
    yield take(LOGIN[REQUEST])
    const userInfo = yield select(getUserInfo)
    yield call(fetchLogin, userInfo)
  }
}

function * userRegister() {
  while(true) {
    const {email, password, phone, verify} = yield take(REGISTER[REQUEST])
    const info = {
      password,
      verify,
      email: '',
      phone: ''
    }
    if (email) {
      info.email = email
    } else {
      info.phone = phone
    }
    yield call(fetchRegister, info)
  }
}

function * user() {
  yield fork(userLogout)
  yield fork(userLogin)
  yield fork(userRegister)
}

export default user