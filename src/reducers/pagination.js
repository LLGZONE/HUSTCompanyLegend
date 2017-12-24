import { FAILURE, REQUEST, SUCCESS } from '../actions'
import { PAGINATION } from '../actions/pagination'

const RESET = 'RESET'

const pagination = () => {
  const updatePagination = (state={
    isFetching: false,
    pageCount: 0,
    page: {}
  }, action) => {
    switch (action.type) {
      case PAGINATION[REQUEST]:
        return {
          ...state,
          isFetching: true,
        }
      case PAGINATION[SUCCESS]:
        return {
          ...state,
          pageCount: action.pageCount || state.pageCount,
          isFetching: false,
          page: {
            ...state.page,
            [action.page]: action.list
          }
        }
      case PAGINATION[FAILURE]:
        return {
          ...state,
          isFetching: false,
        }
      case PAGINATION[RESET]:
        return {
          ...state,
          page: {}
        }
      default:
        return state
    }
  }

  return (state={}, action) => {
    const key = action.pageType

    switch (action.type) {
      case PAGINATION[REQUEST]:
      case PAGINATION[SUCCESS]:
      case PAGINATION[FAILURE]:
      case PAGINATION[RESET]:
        return {
          ...state,
          [key]: updatePagination(state[key], action)
        }
      default:
        return state
    }
  }
}

export default pagination