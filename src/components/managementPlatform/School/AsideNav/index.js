import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import AsideNavItem from '../../Company/AsideNav/AsideNavItem'
import NavLink from '../../Company/AsideNav/NavLink'
import routes from '../../../../routes'

import '../../Company/AsideNav/index.scss'

const AsideNav = ({disabled, push}) => {
  const { schoolManagement: scm } = routes
  const review = `${scm}/review`
  const posts = `${scm}/posts`
  const user = `${scm}/user`
  const exercitation = `${scm}/exercitation`

  return (
    <section className="management-company-aside">
      <nav className="management-company-aside-nav">
        <AsideNavItem to={review} title={'审核'}>
          <NavLink
            msg={'基地审核'}
            path={scm.baseReview.path}
            onClick={()=>push(scm.baseReview.path)}
          />
          <NavLink
            msg={'岗位审核'}
            path={scm.postsReview.path}
            onClick={()=>push(scm.postsReview.path)}
          />
        </AsideNavItem>
        <AsideNavItem to={posts} title={'岗位管理'}>
          <NavLink
            msg={'候选岗位'}
            path={scm.postsWaiting.path}
            onClick={()=>push(scm.postsWaiting.path)}
          />
          <NavLink
            msg={'岗位评价'}
            path={scm.postsRate.path}
            onClick={()=>push(scm.postsRate.path)}
          />
        </AsideNavItem>
        <AsideNavItem to={exercitation} title={'实习管理'}>
          <NavLink
            msg={'实习推荐'}
            path={scm.postsRecommend.path}
            onClick={()=>push(scm.postsRecommend.path)}
          />
          <NavLink
            msg={'实习日志'}
            path={scm.exercitationRecord.path}
            onClick={()=>push(scm.exercitationRecord.path)}
          />
          <NavLink
            msg={'学生管理'}
            path={scm.studentManage.path}
            onClick={()=>push(scm.studentManage.path)}
          />
        </AsideNavItem>
        <AsideNavItem to={user} title={'用户中心'}>
          <NavLink
            msg={'完善资料'}
            path={scm.msgPerfection.path}
            onClick={()=>push(scm.msgPerfection.path)}
          />
          <NavLink
            msg={'查看审核'}
            path={scm.pending.path}
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