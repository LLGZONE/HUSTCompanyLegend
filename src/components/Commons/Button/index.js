/**
 * Created by LLGZONE on 2017/10/31.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Button = ({value, backgroundColor="#FF9800", color="white", border='none', url, width, height}) => {
  const style = {
    backgroundColor,
    color,
    border,
    width,
    height
  }

  const btn = (
    <div style={style}>
      <p>{value}</p>
    </div>
  )

  return url ? <Link to={url}>{btn}</Link> : btn
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Button