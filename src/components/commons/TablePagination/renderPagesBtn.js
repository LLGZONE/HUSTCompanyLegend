/**
 * Created by LLGZONE on 2017/11/11.
 */
import React from 'react'
import PaginationBtn from './PaginationBtn'

const renderPagesBtn = (arr, pageIndex, activeStyle, onClick) => {
  return arr.map(item => <PaginationBtn
    activeStyle={item === pageIndex ? activeStyle : {}}
    text={`${item}`}
    onClick={onClick}
  />)
}

export default renderPagesBtn