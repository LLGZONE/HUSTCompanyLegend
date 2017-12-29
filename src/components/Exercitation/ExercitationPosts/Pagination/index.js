/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import PaginationBtn from './PaginationBtn'
import {Link} from 'react-router-dom'
import renderPageBtn from './renderPagesBtn'

import './index.scss'

import PropTypes from 'prop-types'

//size为pagination btn的个数
const Pagination = ({pageIndex, maxPageIndex, size, path, paginate}) => {
  const activeStyle = {
    backgroundColor: '#FF9800',
    color: 'white'
  }

  const rest = maxPageIndex % size === 0 ? size : maxPageIndex % size
  const isStart = pageIndex <= size / 2
  const isEnd = maxPageIndex - pageIndex + 1 <= rest

  const restArr = new Array(rest)
    .fill(1)
    .map((item, id) => maxPageIndex-rest+id+1)
  const sizeArr = new Array(size).fill(1).map((item, id) => pageIndex-Math.ceil(size/2)+id+1)
  let startArr;
  if (maxPageIndex < size) {
    startArr = new Array(maxPageIndex).fill(1).map((item, id) => 1+id)
  } else {
    startArr = new Array(size).fill(1).map((item, id) => 1+id)
  }

  return (
    <nav className="exercitationPosts-pagination">
      <div className="exercitationPosts-pagination-container">
        <Link to={`${path}?page=1`}>
          <PaginationBtn text="首页"/>
        </Link>
        <Link to={`${path}?page=${pageIndex > 1 ? pageIndex - 1 : 1}`}>
          <PaginationBtn text="上页"/>
        </Link>
        {
          isStart
            ? renderPageBtn(startArr, pageIndex, activeStyle, path)
            : isEnd
                ? renderPageBtn(restArr, pageIndex, activeStyle, path)
                : renderPageBtn(sizeArr, pageIndex, activeStyle, path)
        }
        <Link to={`${path}?page=${pageIndex !== maxPageIndex ? pageIndex + 1 : maxPageIndex}`}>
          <PaginationBtn text="下页"/>
        </Link>
      </div>
    </nav>
    )
}

Pagination.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  maxPageIndex: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
}

export default Pagination