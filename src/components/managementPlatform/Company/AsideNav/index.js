/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import AsideNavItem from './AsideNavItem'
import NavLink from './NavLink'

import './index.scss'

const postsUrl = '/management/Company/posts'
const traineeUrl = '/management/Company/trainee'
const userUrl = '/management/Company/user'

const AsideNav = () => (
  <section className="management-company-aside">
    <nav className="management-company-aside-nav">
      <AsideNavItem title="岗位管理" to={postsUrl} >
        <NavLink msg="发布岗位" path={`${postsUrl}/publish`} />
        <NavLink msg="岗位管理"  path={`${postsUrl}/manage`} />
      </AsideNavItem>
      <AsideNavItem title="实习生管理" to={traineeUrl} >
        <NavLink msg="实习生筛选" path={`${traineeUrl}/filter`}  />
      </AsideNavItem>
      <AsideNavItem to={userUrl} title="用户中心">
        <NavLink msg="完善信息" path={`${userUrl}/info/perfect`}  />
      </AsideNavItem>
    </nav>
  </section>
)

export default AsideNav