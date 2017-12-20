import React from 'react'
import PropTypes from 'prop-types'

import 'font-awesome/css/font-awesome.min.css'

const WarnText = ({text, className}) => {
  return (
    <span style={{color: '#700', fontSize: '1em'}} className={className}>
      <i className="fa fa-exclamation-triangle" />
      {text}
    </span>
  )
}

WarnText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default WarnText