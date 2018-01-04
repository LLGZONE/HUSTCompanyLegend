import { take, put, call, fork, select } from 'redux-saga/effects'
import { login, logout, LOGOUT, LOGIN, register, REGISTER } from '../actions/user'
import { BASE_URL } from '../config/url'
import { REQUEST } from '../actions'
import { getUserInfo } from '../reducers/selectors'
import fetchEntity from '../utils/fetchEntity'
import { isPerfectCMsg } from '../actions/company'

function fetchUserInfo(uid) {
  const url = `${BASE_URL}/user/getById/${uid}`

  return fetchEntity(url)
}

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
      const { cid, sid, stid } = yield call(fetchUserInfo, response.uid)
      switch (info.identity) {
        case 0:
          if (cid) {
            localStorage.setItem('cid', cid)
            yield put(isPerfectCMsg())
          }
          break;
        case 1:
          if (sid) {
            localStorage.setItem('sid', sid)
            yield put()
          }
          break;
        case 2:
          if (stid) {
            localStorage.setItem('stid', stid)
            yield put()
          }
          break;
        default:
          break
      }
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
    const {response} = yield call(fetchRegisterApi, info)
    if (response.status === 'success') {
      yield put(register.success())
    } else {
      yield put(register.failure('用户已经存在'))
    }
  }
  catch (e) {
    yield put(register.failure('网络故障'))
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
      yield put(logout.failure('网络故障'))
    }
  }
}

function * userLogin() {
  while (true) {
    yield take(LOGIN[REQUEST])
    const {username, password, type} = yield select(getUserInfo)
    let identity = 0
    switch (type) {
      case 'company':
        identity = 0
        break
      case 'school':
        identity = 1
        break
      case 'student':
        identity = 2
        break
      default:
        break
    }
    yield call(fetchLogin, {username, password, identity})
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
      info.username = email
    } else {
      info.phone = phone
      info.username = phone
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