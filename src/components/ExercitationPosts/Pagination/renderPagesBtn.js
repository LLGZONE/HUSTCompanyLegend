/**
 * Created by LLGZONE on 2017/11/2.
 */
import React from 'react'
import PaginationBtn from './PaginationBtn'
import {Link} from 'react-router-dom'

function renderPagesBtn(arr, pageIndex, activeStyle) {
  arr.map((item) =>
    <Link
      to={`/exercitation/posts/pagination/${item}`}
      key={`${item}`}
    >
      <PaginationBtn activeStyle={item === pageIndex ? activeStyle : {}} text={`${item}`} />
    </Link>
  )
}

export default renderPagesBtn