import { FAILURE, REQUEST, SUCCESS } from '../actions'
import { PAGINATION } from '../actions/pagination'

const pagination = () => {
  const updatePagination = (state={
    isFetching: false,
    pageCount: 0,
    list: [],
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
          [action.page]: action.list,
        }
      case PAGINATION[FAILURE]:
        return {
          ...state,
          isFetching: false,
        }
      default:
        return state
    }
  }

  return (state, action) => {
    const key = action.pageType

    switch (action.type) {
      case PAGINATION[REQUEST]:
      case PAGINATION[SUCCESS]:
      case PAGINATION[FAILURE]:
        return {
          ...state,
          [key]: updatePagination(state[key], action)
        }
      default:
        return state
    }
  }
}

export default pagination()