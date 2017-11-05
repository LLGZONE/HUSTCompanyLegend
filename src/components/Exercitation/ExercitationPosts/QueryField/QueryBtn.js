/**
 * Created by LLGZONE on 2017/10/31.
 */
import React from 'react'
import Button from '../../../commons/Button/index'

const QueryBtn = ({handleClick}) => (
  <Button
    value="搜索"
    onClick={handleClick}
    customStyle={{fontSize: '28px'}}
  />
)

export default QueryBtn