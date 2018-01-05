/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import './index.scss'

const NavLink = ({onClick, msg, disabled, path}) => (
  <Route path={path} children={({match}) => (
    <div className={`${match ? 'active-link' : ''} link normal-font`}>
      <input
        type="button"
        onClick={onClick}
        disabled={disabled}
        value={msg}
      />
    </div>
  )} />
)

NavLink.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  msg: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default NavLink