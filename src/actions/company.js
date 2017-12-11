import action from '../utils/action'
import createRequestTypes from '../utils/createRequestTypes'
import { REQUEST, SUCCESS, FAILURE } from './index'

export const REGISTER = createRequestTypes('COMPANY_REGISTER')
export const STD_LIST = createRequestTypes('STUDENT_LIST')

export const register = {
  request: ({
    cname,
    address,
    phone,
    industry,
    scale,
    property,
    intro,
    site,
    cert_id,
    corporation,
    groupid,
    high_auth,
            }) => action(REGISTER[REQUEST], {
    cname,
    address,
    phone,
    industry,
    scale,
    property,
    intro,
    site,
    cert_id,
    corporation,
    groupid,
    high_auth,
  }),
  success: () => action(REGISTER[SUCCESS]),
  failure: (error) => action(REGISTER[FAILURE])
}

export const stdList = {
  request: cid => action(STD_LIST[REQUEST], cid),
  success: () => action(STD_LIST[SUCCESS]),
  failure: (error) => action(STD_LIST[FAILURE]),
}