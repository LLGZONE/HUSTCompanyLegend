import { IS_PERFECT_CMSG } from '../actions/company'

const companyReducer = (state= {
  isPerfectCMsg: false,
  scale: "",
  corporation:"",
  phone: "",
  cname: "",
  site: "",
  address: "",
  intro: "",
}, action) => {
  switch (action.type) {
    case IS_PERFECT_CMSG:
      return {
        ...state,
        isPerfectCMsg: true,
      }
    case 'COMPANY_INFO_SUCCESS':
      return {
        ...state,
        ...action.info
      }
    default:
      return state
  }
}

export default companyReducer