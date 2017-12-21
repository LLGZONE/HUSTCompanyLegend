/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import AsideNavItem from './AsideNavItem'
import NavLink from './NavLink'
import routes from '../../../../routes'

import './index.scss'

const postsUrl = '/management/company/exercitation/posts'
const traineeUrl = '/management/company/exercitation/trainee'
const userUrl = '/management/company/exercitation/user'

const AsideNav = () => {
  const { companyManagement } = routes
  return (
    <section className="management-company-aside">
      <nav className="management-company-aside-nav">
        <AsideNavItem title="岗位管理" to={postsUrl}>
          <NavLink msg="发布岗位" path={companyManagement.postsPublish.path}/>
          <NavLink msg="岗位管理" path={companyManagement.postsManage.path}/>
        </AsideNavItem>
        <AsideNavItem title="实习生管理" to={traineeUrl}>
          <NavLink msg="实习生筛选" path={companyManagement.traineeFilter.path}/>
        </AsideNavItem>
        <AsideNavItem to={userUrl} title="用户中心">
          <NavLink msg="完善信息" path={companyManagement.msgPerfection.path}/>
          <NavLink msg="查看审核" path={companyManagement.pending.path}/>
        </AsideNavItem>
      </nav>
    </section>
  )
}

export default AsideNav