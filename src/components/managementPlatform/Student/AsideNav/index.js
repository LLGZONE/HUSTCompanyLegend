import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import AsideNavItem from '../../Company/AsideNav/AsideNavItem'
import NavLink from '../../Company/AsideNav/NavLink'
import routes from '../../../../routes'

import './index.scss'

const AsideNav = ({disabled, push}) => {
  const { studentManagement: stm } = routes
  const user = `${stm}/user`

  return (
    <section className="management-company-aside">
      <nav className="management-company-aside-nav">
        <AsideNavItem to={user} title={'用户中心'}>
          <NavLink
            msg={'完善资料'}
            path={stm.msgPerfection}
            onClick={()=>push(stm.msgPerfection)}
          />
        </AsideNavItem>
      </nav>
    </section>
  )
}

const mapStateToProps = (state) => {
  const { isPerfectCMsg } = state.reducers.company

  return {
    disabled: !isPerfectCMsg
  }
}

export default connect(mapStateToProps, {push})(AsideNav)
