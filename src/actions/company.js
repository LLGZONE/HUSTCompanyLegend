import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'
import { REQUEST, SUCCESS, FAILURE } from './index'

export const STD_LIST = createRequestTypes('STUDENT_LIST')
export const IS_PERFECT_CMSG = 'IS_PERFECT_CMSG'
export const PERFECT_CMSG = createRequestTypes('PERFECT_CMSG')
export const PUBLISH = createRequestTypes('EXERCITATION_PUBLISH')

export const stdList = {
  request: cid => action(STD_LIST[REQUEST], {cid}),
  success: () => action(STD_LIST[SUCCESS]),
  failure: (error) => action(STD_LIST[FAILURE]),
}

export function isPerfectCMsg() {
  return {
    type: IS_PERFECT_CMSG
  }
}

export const perfectCMsg = {
  request: (cmsg) => action(PERFECT_CMSG[REQUEST], cmsg),
  success: (cid) => action(PERFECT_CMSG[SUCCESS], cid),
  failure: (error) => action(PERFECT_CMSG[FAILURE], {error}),
}

export const publish = {
  request: (info) => action(PUBLISH[REQUEST], {info}),
  success: () => action(PUBLISH[SUCCESS]),
  failure: error => action(PUBLISH[FAILURE], error),
}

export function getCompanyInfo() {
  return {
    type: 'COMPANY_INFO'
  }
}

export function companyInfoSuccess(info) {
  return {
    type: 'COMPANY_INFO_SUCCESS',
    info
  }
}