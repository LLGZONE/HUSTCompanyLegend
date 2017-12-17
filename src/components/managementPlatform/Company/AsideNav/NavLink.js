/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Route, Link} from 'react-router-dom'

import './index.scss'

const NavLink = ({path, msg}) => (
  <Route path={path} children={({match}) => (
    <div className={`${match ? 'active-link' : ''} normal-font`}>
      <Link to={path}>
        {msg}
      </Link>
    </div>
  )} />
)

NavLink.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  msg: PropTypes.string.isRequired
}

export default NavLink