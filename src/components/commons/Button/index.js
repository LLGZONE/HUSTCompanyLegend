/**
 * Created by LLGZONE on 2017/10/31.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({value, backgroundColor = '#FF9800', color = 'white', border = '1px solid #FF9800', url, width, height, onClick, customStyle, name, disabled=false}) => {
  const style = {
    backgroundColor,
    color,
    border,
    width,
    height,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '5px 15px',
    lineHeight: customStyle ? customStyle.fontSize : '16px',
  }

  const btn = (
    <input disabled={disabled} type="button" onClick={onClick} style={{...style, ...customStyle}} value={value} name={name}/>
  )

  return url ? <Link to={url}>{btn}</Link> : btn
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button