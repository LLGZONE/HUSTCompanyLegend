import { take, put, fork, call } from 'redux-saga/effects'
import { BASE_URL } from '../config/url'
import { perfectCMsg } from '../actions/company'
import { PERFECT_CMSG } from '../actions/company'
import fetchEntity from '../utils/fetchEntity'

function fetchComponyInfo(uid) {
  const url = `${BASE_URL}/user/`
}

function fetchPerfectCMsg(cmsg) {
  const url = `${BASE_URL}/ company/submit/`
  const header = {
    method: 'POST',
    body: JSON.stringify(cmsg),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetchEntity(url, header)
}

function * perfectCMsg() {
  try {
    const {response} = yield call(fetchPerfectCMsg)
    if (response && response.cid) {
      yield put(perfectCMsg.success(response.cid))
    } else {
      put(perfectCMsg.failure())
    }
  }
  catch(e) {
    yield put(perfectCMsg.failure('网络故障'))
  }
}

function * watchSaga() {
  while (true) {
    yield take(PERFECT_CMSG['REQUEST'])

  }
}

function * rootSaga() {
  yield fork(watchSaga)
}

export default rootSaga