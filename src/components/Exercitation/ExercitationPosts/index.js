/**
 * Created by LLGZONE on 2017/11/7.
 */
import React from 'react'
import {Route} from 'react-router-dom'

import QueryField from './QueryField'
import FilterField from './FilterField'
import PostsField from './PostsField'
import Pagination from './Pagination'

import './index.scss'

const ExercitationPosts = () => (
  <div>
    <main className="exercitation-posts-main">
      <QueryField/>
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

export default ExercitationPosts