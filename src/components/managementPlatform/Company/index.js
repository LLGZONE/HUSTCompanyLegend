/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Header from './Header'
import AsideNav from './AsideNav'
import PendingReview from './PendingReview'
import PerfectMessage from './PerfectMessage'
import PostsManage from './PostsManage'
import PostsPublish from './PostsPublish'
import SignUp from './SignUp'
import TraineeFilter from './TraineeFilter'
import Footer from '../../commons/Footer'

import hotClicks from '../../Home/hotClicks.json'
import articles from '../../Home/aticles.json'

import './index.scss'

const CompanyManagement = () => {
  const prefix = '/management/company/exercitation'

  return (
    <div>
      <Header/>
      <main className="management-company-main-container" style={{display: 'flex', paddingTop: '70px'}}>
        <AsideNav/>
        <Route path={`${prefix}`} exact render={() => <Redirect to={`${prefix}/signup`}/>} />
        <Route path={`${prefix}/pending`} component={PendingReview}/>
        <Route path={`${prefix}/posts/publish`} component={PostsPublish}/>
        <Route path={`${prefix}/posts/manage`} component={PostsManage}/>
        <Route path={`${prefix}/user/perfect/message`} component={PerfectMessage}/>
        <Route path={`${prefix}/signup`} component={SignUp}/>
        <Route path={`${prefix}/trainee/filter`} component={TraineeFilter}/>
      </main>
      <Footer hotClicks={hotClicks} latestArticle={articles}/>
    </div>
  )
}

export default CompanyManagement