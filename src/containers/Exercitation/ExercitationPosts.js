/**
 * Created by LLGZONE on 2017/11/7.
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

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
    return this.props.location.search !== nextProps.location.search
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
    } = this.props
    const path = match.path
    const pageIndex = this.getPageIdx()

    return (
      <div>
        <main className="exercitation-posts-main">
          <QueryField query={query} isFetching={isFetching} filter={filter}/>
          <Route path="/exercitation/posts/filter" component={FilterField}/>
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
  const count = 1 || state.reducers.pagination[post].pageCount
  const posts = [] || state.reducers.pagination[post].page

  return {
    posts,
    isFetching,
    error,
    filter,
    count,
  }
}

export default connect(mapStateToProps, {
  query: query.request,
  queryFilter,
  paginate: pagination.request(post),
})(ExercitationPosts)