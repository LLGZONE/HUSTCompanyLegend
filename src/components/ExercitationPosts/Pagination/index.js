/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import PaginationBtn from './PaginationBtn'
import {Link} from 'react-router-dom'

import './index.css'

import PropTypes from 'prop-types'

const Pagination = ({pageIndex, maxPageIndex, size}) => {
  const activeStyle = {
    backgroundColor: '#FF9800',
    color: 'white'
  }

  const rest = maxPageIndex - pageIndex + 1
  const isEnd = rest <= size

  const restArr = new Array(rest).fill(1).map((item, id) => pageIndex+id)
  const sizeArr = new Array(size).fill(1).map((item, id) => pageIndex-Math.ceil(size/2)+id+1)
  const startArr = new Array(size).fill(1).map((item, id) => 1+id)

  return (
    <nav className="exercitationPosts-pagination">
      <div className="exercitationPosts-pagination-container">
        <Link to="/exercitation/posts/pagination/1">
          <PaginationBtn text="首页"/>
        </Link>
        <Link to={`/exercitation/posts/pagination/${pageIndex !== 1 ? pageIndex - 1 : 1}`}>
          <PaginationBtn text="上页"/>
        </Link>
        {isEnd
          ? (
            restArr.map((item) =>
              <Link
                to={`/exercitation/posts/pagination/${item}`}
                key={`${item}`}
              >
                <PaginationBtn activeStyle={item === pageIndex ? activeStyle : {}} text={`${item}`}/>
              </Link>)
          )
          : (
            sizeArr.map((item) =>
              <Link
                to={`/exercitation/posts/pagination/${item}`}
                key={`${item}`}
              >
                <PaginationBtn activeStyle={item === pageIndex ? activeStyle : {}} text={`${item}`} />
              </Link>
            )
          )
        }
        <Link to={`/exercitation/posts/pagination/${pageIndex !== maxPageIndex ? pageIndex + 1 : maxPageIndex}`}>
          <PaginationBtn text="下页"/>
        </Link>
      </div>
    </nav>
    )
}

Pagination.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  maxPageIndex: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
}

export default Pagination