/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link, Route} from 'react-router-dom'

import './NavbarItem.scss'

const NavBarItem = ({to, label,...rest}) => (
  <Route path={to} exact children={({match}) => {

    return (
      <div className={`navbar-item ${match ? 'nav-active' : ''}`}>
        <Link to={to}>
          {label}
        </Link>
      </div>
    )
  }} />
)

NavBarItem.propTypes = {
  to: PropTypes.oneOf(PropTypes.string, PropTypes.object).isRequired,
  label: PropTypes.string.isRequired
}

export default NavBarItem