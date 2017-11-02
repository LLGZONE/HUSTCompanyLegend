/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import PaginationBtn from './PaginationBtn'
import {Link} from 'react-router-dom'

import './index.css'

import PropTypes from 'prop-types'

const Pagination = ({pageIndex, maxPageIndex}) => {
  let pageIdx = pageIndex;
  if (pageIndex === 1) {
    pageIdx = 2;
  }

  return (
    <nav className="exercitationPosts-pagination">
      <div className="exercitationPosts-pagination-container">
        <Link to="/exercitation/posts/pagination/1">
          <PaginationBtn text="首页"/>
        </Link>
        <Link to={`/exercitation/posts/pagination/${pageIndex !== 1 ? pageIndex - 1 : 1}`}>
          <PaginationBtn text="上页"/>
        </Link>
        <Link to={`/exercitation/posts/pagination/${pageIdx-1}`}>
          <PaginationBtn text={`${pageIdx-1}`}/>
        </Link>
        <Link to={`/exercitation/posts/pagination/${pageIdx}`}>
          <PaginationBtn text={`${pageIdx}`}/>
        </Link>
        <Link to={`/exercitation/posts/pagination/${pageIdx+1}`}>
          <PaginationBtn text={`${pageIdx+1}`}/>
        </Link>
        <Link to={`/exercitation/posts/pagination/${pageIndex !== maxPageIndex ? pageIndex + 1 : maxPageIndex}`}>
          <PaginationBtn text="下页"/>
        </Link>
      </div>
    </nav>
    )
}

Pagination.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  maxPageIndex: PropTypes.number.isRequired
}

export default Pagination