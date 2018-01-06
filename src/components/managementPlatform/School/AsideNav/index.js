import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

import AsideNavItem from '../../Company/AsideNav/AsideNavItem'
import NavLink from '../../Company/AsideNav/NavLink'
import routes from '../../../../routes'

import './index.scss'

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
            path={scm.baseReview}
            onClick={()=>push(scm.baseReview)}
          />
          <NavLink
            msg={'岗位审核'}
            path={scm.postsReview}
            onClick={()=>push(scm.postsReview)}
          />
        </AsideNavItem>
        <AsideNavItem to={posts} title={'岗位管理'}>
          <NavLink
            msg={'候选岗位'}
            path={scm.postsWaiting}
            onClick={()=>push(scm.postsWaiting)}
          />
          <NavLink
            msg={'岗位评价'}
            path={scm.postsRate}
            onClick={()=>push(scm.postsRate)}
          />
        </AsideNavItem>
        <AsideNavItem to={exercitation} title={'实习管理'}>
          <NavLink
            msg={'实习推荐'}
            path={scm.postsRecommend}
            onClick={()=>push(scm.postsRecommend)}
          />
          <NavLink
            msg={'学生管理'}
            path={scm.studentManage}
            onClick={()=>push(scm.studentManage)}
          />
        </AsideNavItem>
        <AsideNavItem to={user} title={'用户中心'}>
          <NavLink
            msg={'完善资料'}
            path={scm.msgPerfection}
            onClick={()=>push(scm.msgPerfection)}
          />
          <NavLink
            msg={'查看审核'}
            path={scm}
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