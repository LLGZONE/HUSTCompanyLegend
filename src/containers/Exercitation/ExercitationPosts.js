/**
 * Created by LLGZONE on 2017/11/7.
 */
import React from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'

import { query, queryFilter } from '../../actions/exercitation'
import { getPostsQuery } from '../../reducers/selectors'
import QueryField from '../../components/Exercitation/ExercitationPosts/QueryField/index'
import FilterField from '../../components/Exercitation/ExercitationPosts/FilterField/index'
import PostsField from '../../components/Exercitation/ExercitationPosts/PostsField/index'
import Pagination from '../../components/Exercitation/ExercitationPosts/Pagination/index'

import '../../components/Exercitation/ExercitationPosts/index.scss'


const ExercitationPosts = ({query, posts, isFetching, error, filter}) => (
  <div>
    <main className="exercitation-posts-main">
      <QueryField query={query} isFetching={isFetching} filter={filter} />
      <Route path="/exercitation/posts/filter" component={FilterField} />
      <PostsField handleTime="2017-09-08"/>
      <PostsField handleTime="2017-09-08"/>
      <PostsField handleTime="2017-09-08"/>
      <PostsField handleTime="2017-09-08"/>
      <PostsField handleTime="2017-09-08"/>
      <PostsField handleTime="2017-09-08"/>
      <PostsField handleTime="2017-09-08"/>
      <PostsField handleTime="2017-09-08"/>
      <Pagination pageIndex={2} maxPageIndex={24} size={3}/>
    </main>
  </div>
)

const mapStateToProps = (state) => {
  const {posts, isFetching, error, filter} = getPostsQuery(state)

  return {
    posts,
    isFetching,
    error,
    filter
  }
}

export default connect(mapStateToProps, {
  query: query.request,
  queryFilter,
})(ExercitationPosts)