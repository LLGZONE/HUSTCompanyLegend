/**
 * Created by LLGZONE on 2017/11/7.
 */
import React from 'react'
import { connect } from 'react-redux'

import { showFilter, hiddenFilter } from '../../actions/exercitation'
import { pagination } from '../../actions/pagination'
import { query, queryFilter } from '../../actions/exercitation'
import { getPostsQuery } from '../../reducers/selectors'
import QueryField from '../../components/Exercitation/ExercitationPosts/QueryField'
import FilterField from '../../components/Exercitation/ExercitationPosts/FilterField'
import PostsField from '../../components/Exercitation/ExercitationPosts/PostsField'
import Pagination from '../../components/Exercitation/ExercitationPosts/Pagination'
import TopProgress from '../../components/commons/TopProgress'

import '../../components/Exercitation/ExercitationPosts/index.scss'
import { urlParams } from '../../utils/queryStrToObj'

const post = 'intership'
let id = 1

class MapPosts extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !nextProps.isFetching
  }

  render() {
    const { posts } = this.props

    return (
    <React.Fragment>
      {posts.map(({ isname, cname = '360', place, cycle, expiry }) => {
          return <PostsField
            postName={isname}
            company={cname}
            place={place}
            duration={cycle}
            ddl={expiry}
            key={id++}
          />
        },
      )}
    </React.Fragment>)
  }
}

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
    return this.props.filterShow !== nextProps.filterShow
      || this.props.location.search !== nextProps.location.search
      || this.props.posts.length !== nextProps.posts.length
      || nextProps.isFetching !== this.props.isFetching
  }

  componentDidUpdate() {
    const { paginate } = this.props
    const pageIndex = this.getPageIdx()

    paginate(pageIndex)
  }

  render() {
    const {
      query,
      isFetching,
      count = 0,
      filter,
      match,
      paginate,
      showFilter,
      hiddenFilter,
      filterShow,
      posts = [],
    } = this.props
    const path = match.path
    const pageIndex = parseInt(this.getPageIdx(), 10)
    return (
      <div>
        {isFetching && <TopProgress/>}
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
          <div style={{ minHeight: '50vmin', width: '100%' }}>
            {posts.length === 0 && !isFetching && '暂时还没有。。。'}
            <MapPosts isFetching={isFetching} posts={posts}/>
          </div>
          <Pagination
            path={path}
            pageIndex={pageIndex || 1}
            maxPageIndex={count}
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
  const postState = state.reducers.pagination[post]
  const count = postState && Math.ceil(postState.pageCount / 8)
  const posts = (postState && postState.page[1]) || []

  return {
    posts,
    isFetching,
    error,
    filter,
    count,
    filterShow,
  }
}

export default connect(mapStateToProps, {
  query: query.request,
  queryFilter,
  paginate: pagination.request(post),
  showFilter,
  hiddenFilter,
})(ExercitationPosts)