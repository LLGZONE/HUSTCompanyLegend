import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Header from '../../../components/managementPlatform/Student/Header'
import routes from '../../../routes'

import '../../../components/managementPlatform/Company/index.scss'
import Footer from '../../../components/commons/Footer/index'
import SignUp from '../../auth/SignUp/Student'
import AsideNav from '../../../components/managementPlatform/Student/AsideNav'
import PerfectMessage from './PerfectMessage'
import PendingReview from './PendingReview'

import hotClicks from '../../../api/home/hotClicks.json'
import articles from '../../../api/home/aticles.json'
import { isLogin } from '../../../reducers/selectors'

class StudentManagement extends React.Component {
  render() {
    const { login } = this.props
    const { studentManagement } = routes
    return (
      <React.Fragment>
        <Header/>
        <main className="management-company-main-container">
          <Route path={studentManagement.signUp.path} component={SignUp}/>
          <Route path={studentManagement.signUp.path} exact component={() => <Redirect to={`${studentManagement.signUp.path}/phone`} />} />
          {
            login ? (
                <React.Fragment>
                  <Route
                    path={studentManagement.path}
                    component={({location})=>
                    location.pathname.includes('signup')
                      ? false
                      : <AsideNav/>}
                  />
                  <Route
                    path={studentManagement.path}
                    exact
                    render={()=><Redirect to={studentManagement.msgPerfection.path} />}
                  />
                  <Route
                    path={studentManagement.msgPerfection.path}
                    component={PerfectMessage}
                  />
                  <Route
                    path={studentManagement.pending.path}
                    component={PendingReview}
                  />
                </React.Fragment>
              )
              : <Route path={studentManagement.path} component={({ location }) =>
              location.pathname.indexOf(studentManagement.signUp.path) < 0
              &&
              <Redirect to={`${studentManagement.signUp.path}/phone`}/>}/>
          }
        </main>
        <Footer hotClicks={hotClicks} latestArticle={articles}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const login = isLogin(state)

  return {
    login,
  }
}

export default connect(mapStateToProps)(StudentManagement)