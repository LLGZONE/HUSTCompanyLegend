import { REGISTER, STD_LIST, IS_PERFECT_CMSG } from '../actions/company'

const companyReducer = (state= {
  isPerfectCMsg: false
}, action) => {
  switch (action.type) {
    case IS_PERFECT_CMSG:
      return {
        ...state,
        isPerfectCMsg: true,
      }
    default:
      return state
  }
}

export default companyReducer