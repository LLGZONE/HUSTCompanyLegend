/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import Button from '../../../commons/Button/index'

import PropTypes from 'prop-types'

const PaginationBtn = ({text, activeStyle}) => (
  <Button value={text} backgroundColor="white" color="#FF9800" customStyle={activeStyle} />
)

PaginationBtn.propTypes = {
  text: PropTypes.string.isRequired,
  activeStyle: PropTypes.object
}

export default PaginationBtn