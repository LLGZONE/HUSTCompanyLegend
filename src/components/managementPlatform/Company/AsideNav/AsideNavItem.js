/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import {Route} from 'react-router-dom'

import PropTypes from 'prop-types'

import './index.scss'

const AsideNavItem = ({title, to, children}) => (
  <Route path={to} children={({match}) => {
    return (
      <div className="nav-item">
        <p className={`${match ? 'active-header' : ''} header`}>
          {title}
        </p>
        <div>
          {children}
        </div>
      </div>
    )
  }}/>
)

AsideNavItem.propTypes = {
  to: PropTypes.oneOf([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
}

export default AsideNavItem