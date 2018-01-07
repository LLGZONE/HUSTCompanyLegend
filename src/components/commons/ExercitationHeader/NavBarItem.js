/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import './NavbarItem.scss'

const NavBarItem = ({ to, label, exact, disabled, push }) => (
  <Route path={to} exact={exact} children={({ match }) => {

    return (
      <div className={`navbar-item ${match ? 'nav-active' : ''}`}>
        <a style={{ cursor: disabled ? 'not-allowed' : 'pointer' }} onClick={() => !disabled && push(to)}>
          {label}
        </a>
      </div>
    )
  }}/>
)

NavBarItem.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

export default connect(null, { push }, null, { pure: false })(NavBarItem)