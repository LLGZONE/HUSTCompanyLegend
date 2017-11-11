/**
 * Created by LLGZONE on 2017/11/11.
 */
import React from 'react'
import Button from '../Button'

const PaginationBtn = ({style, onClick, text}) => (
  <Button customStyle={style} onClick={onClick} value={text} />
)

export default PaginationBtn