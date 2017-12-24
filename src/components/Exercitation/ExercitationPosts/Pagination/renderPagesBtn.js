/**
 * Created by LLGZONE on 2017/11/2.
 */
import React from 'react'
import PaginationBtn from './PaginationBtn'
import {Link} from 'react-router-dom'

function renderPagesBtn(arr, pageIndex, activeStyle, path) {
  return arr.map((item) =>
    <Link
      to={`${path}?page=${item}`}
      key={`${item}`}
    >
      <PaginationBtn activeStyle={item === parseInt(pageIndex, 10) ? activeStyle : {}} text={`${item}`} />
    </Link>
  )
}

export default renderPagesBtn