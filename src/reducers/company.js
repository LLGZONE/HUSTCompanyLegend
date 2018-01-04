import { REGISTER, STD_LIST, IS_PERFECT_MSG } from '../actions/company'

const companyReducer = (state= {
  isPerfectMsg: false
}, action) => {
  switch (action.type) {
    case IS_PERFECT_MSG:
      return {
        ...state,
        isPerfectMsg: true,
      }
    default:
      return state
  }
}