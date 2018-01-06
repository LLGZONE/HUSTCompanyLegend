import { take, put, fork, call, select} from 'redux-saga/effects'
import { BASE_URL } from '../config/url'
import { perfectCMsg, PERFECT_CMSG, publish, PUBLISH } from '../actions/company'
import fetchEntity from '../utils/fetchEntity'
import getUid from '../utils/getUid'
import jsonHeader from '../utils/jsonHeader'

function fetchPerfectCMsg(cmsg, uid) {
  const url = `${BASE_URL}/company/submit/${uid}`

  return fetchEntity(url, jsonHeader(cmsg))
}

function fetchPublishPostsInfo(postsInfo, uid) {
  const url =  `${BASE_URL}/intership/submit/${uid}`

  return fetchEntity(url, jsonHeader(postsInfo))
}

//============== work saga ============
function * perfectCMsgSaga(cmsg, uid) {
  try {
    const { response } = yield call(fetchPerfectCMsg, cmsg, uid)
    if (response && response.cid) {
      localStorage.setItem('cid', response.cid)
      yield put(perfectCMsg.success(response.cid))
    } else {
      put(perfectCMsg.failure())
    }
  }
  catch (e) {
    yield put(perfectCMsg.failure('网络故障'))
  }
}

function * publishPostsInfo(postsInfo, uid) {
  try {
    const { response } = yield call(fetchPublishPostsInfo, uid)

    if (response && response.isid) {
      yield put(publish.success())
    } else {
      yield put(publish.failure())
    }
  }
  catch(e) {
    yield put(publish.failure('网络故障'))
  }
}

//============= watch saga ===============
function * watchPerfectCMsg() {
  while (true) {
    const action = yield take(PERFECT_CMSG['REQUEST'])
    const uid = yield select(getUid)
    //不要直接删除action的type不然后面的中间件会出错
    const cmsg = {...action}
    delete cmsg.type
    yield call(perfectCMsgSaga, cmsg, uid)
  }
}

function * watchPublishPostsInfo() {
  while (true) {
    const action = yield take(PUBLISH['REQUEST'])
    const uid = yield select(getUid)
    const postsInfo = {...action}
    delete postsInfo.type
    yield call(publishPostsInfo, uid)
  }
}

function * rootSaga() {
  yield fork(watchPerfectCMsg)
  yield fork(watchPublishPostsInfo)
}

export default rootSaga