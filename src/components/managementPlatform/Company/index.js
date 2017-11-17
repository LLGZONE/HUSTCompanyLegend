/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import AsideNav from './AsideNav'
import PendingReview from './PendingReview'
import PerfectMessage from './PerfectMessage'
import PostsManage from './PostsManage'
import PostsPublish from './PostsPublish'
import SignUp from './SignUp'
import TraineeFilter from './TraineeFilter'

const CompanyManagement = () => {
  const prefix = '/management/company'

  return (
    <div>
      <Header/>
      <AsideNav/>
      <Route path={prefix} component={AsideNav} />
      <Route path={`${prefix}/pending`} component={PendingReview}/>
      <Route path={`${prefix}/posts/publish`} component={PostsPublish}/>
      <Route path={`${prefix}/posts/manage`} component={PostsManage}/>
      <Route path={`${prefix}perfect/message`} component={PerfectMessage}/>
      <Route path={`${prefix}/signup`} component={SignUp}/>
      <Route path={`${prefix}/trainee/filter`} component={TraineeFilter}/>
    </div>
  )
}

export default CompanyManagement