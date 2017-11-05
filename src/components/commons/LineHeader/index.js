/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const LineHeader  = ({title, style}) => (
  <div className="commons-lineheader-container" style={style}>
    <span className="commons-lineheader-line">
    </span>
    <p>{title}</p>
    <span className="commons-lineheader-line">
    </span>
  </div>
)

LineHeader.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default LineHeader