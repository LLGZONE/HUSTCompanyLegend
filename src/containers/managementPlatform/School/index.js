import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Header from '../../../components/managementPlatform/School/Header'
import routes from '../../../routes'

import '../../../components/managementPlatform/Company/index.scss'
import Footer from '../../../components/commons/Footer/index'
import SignUp from '../../auth/SignUp/Student'
import AsideNav from '../../../components/managementPlatform/School/AsideNav'

import hotClicks from '../../../api/home/hotClicks.json'
import articles from '../../../api/home/aticles.json'
import { isLogin } from '../../../reducers/selectors'

class schoolManagement extends React.Component {
  render() {
    const { login } = this.props
    const { schoolManagement } = routes
    return (
      <React.Fragment>
        <Header/>
        <main className="management-company-main-container">
          <Route path={schoolManagement.signUp.path} component={SignUp}/>
          <Route path={schoolManagement.signUp.path} exact component={() => <Redirect to={`${schoolManagement.signUp.path}/phone`} />} />
          {
            login ? (
                <React.Fragment>
                  <Route path={`${schoolManagement.path}`} component={({location})=>
                    location.pathname.includes('signup')? false : <AsideNav/>}/>
                </React.Fragment>
              )
              : <Route path={schoolManagement.path} component={({ location }) =>
              location.pathname.indexOf(schoolManagement.signUp.path) < 0
              &&
              <Redirect to={`${schoolManagement.signUp.path}/phone`}/>}/>
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

export default connect(mapStateToProps)(schoolManagement)