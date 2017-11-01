/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import Button from '../../Commons/Button'

import PropTypes from 'prop-types'

const PaginationBtn = ({text}) => (
  <Button value={text} backgroundColor="white" color="#FF9800"/>
)

PaginationBtn.propTypes = {
  text: PropTypes.string.isRequired
}

export default PaginationBtn