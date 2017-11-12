/**
 * Created by LLGZONE on 2017/11/11.
 */
import React from 'react'
import Button from '../Button'

const PaginationBtn = ({activeStyle, onClick, text}) => (
  <Button value={text} backgroundColor="white" color="#FF9800" customStyle={activeStyle} onClick={onClick} />
)

export default PaginationBtn