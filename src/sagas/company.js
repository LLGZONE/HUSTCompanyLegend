import { take, put, fork, call } from 'redux-saga/effects'
import { BASE_URL } from '../config/url'
import { perfectCMsg } from '../actions/company'
import { PERFECT_CMSG } from '../actions/company'
import fetchEntity from '../utils/fetchEntity'

function fetchComponyInfo(uid) {
  const url = `${BASE_URL}/user/`
}

function fetchPerfectCMsg(cmsg) {
  const url = `${BASE_URL}/company/submit/`
  const header = {
    method: 'POST',
    body: JSON.stringify(cmsg),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return fetchEntity(url, header)
}

function * perfectCMsgSaga(cmsg) {
  try {
    const { response } = yield call(fetchPerfectCMsg, cmsg)
    if (response && response.cid) {
      yield put(perfectCMsg.success(response.cid))
    } else {
      put(perfectCMsg.failure())
    }
  }
  catch (e) {
    yield put(perfectCMsg.failure('网络故障'))
  }
}

function * watchPerfectCMsg() {
  while (true) {
    const action = yield take(PERFECT_CMSG['REQUEST'])
    const cmsg = {...action}
    delete cmsg.type
    yield call(perfectCMsgSaga, cmsg)
  }
}

function * rootSaga() {
  yield fork(watchPerfectCMsg)
}

export default rootSaga