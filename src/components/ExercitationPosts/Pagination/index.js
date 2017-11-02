/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import PaginationBtn from './PaginationBtn'
import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'

const Pagination = () => (
  <nav>
    <Link to='/exercitation/posts/pagination/1'>
      <PaginationBtn text="首页"/>
    </Link>
    <Link to='/exercitation/posts/pagination/'>
      <PaginationBtn text="上页"/>
    </Link>
    <Link to='/exercitation/posts/pagination/1'>
      <PaginationBtn text="1"/>
    </Link>
    <Link to='/exercitation/posts/pagination/2'>
      <PaginationBtn text="2"/>
    </Link>
    <Link to='/exercitation/posts/pagination/3'>
      <PaginationBtn text="3"/>
    </Link>
    <Link to='/exercitation/posts/pagination/'>
      <PaginationBtn text="下页"/>
    </Link>
  </nav>
)

export default Pagination