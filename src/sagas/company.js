import { take, put, fork, call } from 'redux-saga/effects'
import { BASE_URL } from '../config/url'
import { perfectCMsg, PERFECT_CMSG, publish, PUBLISH, companyInfoSuccess } from '../actions/company'
import fetchEntity from '../utils/fetchEntity'
import jsonHeader from '../utils/jsonHeader'
import getToken from '../utils/getToken'

function fetchPerfectCMsg(cmsg, token) {
  const url = `${BASE_URL}/company/submit/`

  return fetchEntity(url, jsonHeader({...cmsg, token}))
}

function fetchPublishPostsInfo(postsInfo, token) {
  const url =  `${BASE_URL}/intership/submit`

  return fetchEntity(url, jsonHeader({...postsInfo, token}))
}

function fetchCompanyInfo(cid) {
  const url = `${BASE_URL}/company/getById/${cid}`

  return fetchEntity(url)
}

//============== work saga ============
function * perfectCMsgSaga(cmsg, token) {
  try {
    const { response } = yield call(fetchPerfectCMsg, cmsg, token)
    if (response && response.cid) {
      console.log(response)
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

function * publishPostsInfo(postsInfo, token) {
  try {
    const { response } = yield call(fetchPublishPostsInfo, token)

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
    //不要直接删除action的type不然后面的中间件会出错
    const cmsg = {...action}
    delete cmsg.type
    const token = getToken()
    yield call(perfectCMsgSaga, cmsg, token)
  }
}

function * watchPublishPostsInfo() {
  while (true) {
    const action = yield take(PUBLISH['REQUEST'])
    const postsInfo = {...action}
    const token = getToken()
    delete postsInfo.type
    yield call(publishPostsInfo, token)
  }
}

function * watchGetCompanyInfo() {
  while(true) {
    yield take('COMPANY_INFO')
    const cid = localStorage.getItem('cid')
    const {response: info} = yield call(fetchCompanyInfo, cid)
    yield put(companyInfoSuccess(info))
  }
}

function * rootSaga() {
  yield fork(watchPerfectCMsg)
  yield fork(watchPublishPostsInfo)
  yield fork(watchGetCompanyInfo)
}

export default rootSaga