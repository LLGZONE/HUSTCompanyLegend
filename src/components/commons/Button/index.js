/**
 * Created by LLGZONE on 2017/10/31.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Button = ({value, backgroundColor="#FF9800", color="white", border='1px solid #FF9800', url, width, height, onClick, customStyle}) => {
  const style = {
    backgroundColor,
    color,
    border,
    width,
    height,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 15px'
  }

  const btn = (
    <input type="button" onClick={onClick} style={{...style, ...customStyle}} value={value} />
  )

  return url ? <Link to={url}>{btn}</Link> : btn
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Button