/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link, Route} from 'react-router-dom'

import './NavbarItem.scss'

const NavBarItem = ({to, label, exact, ...rest}) => (
  <Route path={to} exact={exact} children={({match}) => {

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
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

export default NavBarItem