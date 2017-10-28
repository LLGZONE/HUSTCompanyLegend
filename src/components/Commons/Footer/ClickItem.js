/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import PropTypes from 'prop-types'

import 'font-awesome/css/font-awesome.min.css'

const ClickItem = ({item, url}) => (
  <a href={url}>
    <i className="fa fa-chevron-right">{}</i>
    <span>{item}</span>
  </a>
)

ClickItem.propTypes = {
  item: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default ClickItem