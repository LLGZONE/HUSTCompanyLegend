import { combineReducers } from 'redux'
import { POSTS_QUERY, QUERY_FILTER_CHANGE } from '../actions/exercitation'
import { FAILURE, REQUEST, SUCCESS } from '../actions'

const postsQuery = (state = {
  isFetching: false,
  queryString: '',
  filter: {
    place: 'all',//实习地点
    chance: 'all',//转正机会
    time: 'all',  //实习时间
    companySize: 'all',//公司规模
    room: 'all',//是否食宿
    postType: 'all'//岗位类型
  },
  error: false,
}, action) => {
  const {queryString, filter} = action
  switch (action.type) {
    case POSTS_QUERY[REQUEST]:
      return {
        ...state,
        isFetching: true,
        queryString,
        filter,
        error: false,
      }
    case POSTS_QUERY[SUCCESS]:
      return {
        ...state,
        isFetching: false,
      }
    case POSTS_QUERY[FAILURE]:
      return {
        ...state,
        isFetching: false,
        error: true,
      }
    case QUERY_FILTER_CHANGE:
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}

export default combineReducers({
  postsQuery
})