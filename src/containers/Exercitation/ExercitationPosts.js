/**
 * Created by LLGZONE on 2017/11/7.
 */
import React from 'react'
import { connect } from 'react-redux'

import { showFilter, hiddenFilter } from '../../actions/exercitation'
import { pagination } from '../../actions/pagination'
import { query, queryFilter } from '../../actions/exercitation'
import { getPostsQuery } from '../../reducers/selectors'
import QueryField from '../../components/Exercitation/ExercitationPosts/QueryField/index'
import FilterField from '../../components/Exercitation/ExercitationPosts/FilterField/index'
import PostsField from '../../components/Exercitation/ExercitationPosts/PostsField/index'
import Pagination from '../../components/Exercitation/ExercitationPosts/Pagination/index'

import '../../components/Exercitation/ExercitationPosts/index.scss'
import { urlParams } from '../../utils/queryStrToObj'

const post = 'post'

class ExercitationPosts extends React.Component {
  getPageIdx() {
    const { location } = this.props

    return urlParams(location.search).get('page')
  }

  componentWillMount() {
    const { paginate } = this.props
    paginate(1)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.filterShow !== nextProps.filterShow || this.props.location.search !== nextProps.location.search
  }

  componentDidUpdate() {
    const { paginate} = this.props
    const pageIndex = this.getPageIdx()

    paginate(pageIndex)
  }

  render() {
    const {
      query,
      isFetching,
      count,
      filter,
      match,
      paginate,
      showFilter,
      hiddenFilter,
      filterShow,
    } = this.props
    const path = match.path
    const pageIndex = this.getPageIdx()

    return (
      <div>
        <main className="exercitation-posts-main">
          <QueryField
            query={query}
            isFetching={isFetching}
            filter={filter}
            showFilter={showFilter}
            hiddenFilter={hiddenFilter}
            isFilterShow={filterShow}
          />
          {filterShow && <FilterField/>}
          <PostsField handleTime="2017-09-08"/>
          <PostsField handleTime="2017-09-08"/>
          <PostsField handleTime="2017-09-08"/>
          <PostsField handleTime="2017-09-08"/>
          <PostsField handleTime="2017-09-08"/>
          <PostsField handleTime="2017-09-08"/>
          <PostsField handleTime="2017-09-08"/>
          <PostsField handleTime="2017-09-08"/>
          <Pagination
            path={path}
            pageIndex={parseInt(pageIndex, 10) || 1}
            maxPageIndex={24}
            size={3}
            paginate={paginate}
          />
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { isFetching, error, filter } = getPostsQuery(state)
  const filterShow = state.reducers.exercitation.postsQuery.showFilter
  const count = 1 || state.reducers.pagination[post].pageCount
  const posts = [] || state.reducers.pagination[post].page

  return {
    posts,
    isFetching,
    error,
    filter,
    count,
    filterShow
  }
}

export default connect(mapStateToProps, {
  query: query.request,
  queryFilter,
  paginate: pagination.request(post),
  showFilter,
  hiddenFilter,
})(ExercitationPosts)