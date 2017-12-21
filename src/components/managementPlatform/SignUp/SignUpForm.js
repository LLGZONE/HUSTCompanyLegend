/**
 * Created by LLGZONE on 2017/11/6.
 */
import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import routes from '../../../routes'
import EmailRegister from './EmailRegister'
import MobileRegister from './MobileRegister'

import '../../../components/LogIn/LogInType.scss'
import './index.scss'

const SignUpForm = () => {
  const prefix = routes.companyManagement.signUp.path
  const mobilePath = `${prefix}/phone`
  const emailPath = `${prefix}/email`

  return (
    <div>
      <nav className="company-signup-form-nav">
        <Route
          path={mobilePath}
          children={({ match }) => {
            return (
              <div className={match
                ? 'login-select-type active'
                : 'login-select-type'}>
                <Link to={mobilePath}>
                  手机注册
                </Link>
              </div>
            )
          }}
        />
        <Route
          path={emailPath}
          children={({ match }) => {
            return (
              <div className={match
                ? 'login-select-type active'
                : 'login-select-type'}>
                  <Link to={emailPath}>
                    邮箱注册
                  </Link>
              </div>
            )
          }}
        />
      </nav>
      <Switch>
        <Route path={mobilePath} component={MobileRegister} />
        <Route path={emailPath} component={EmailRegister} />
      </Switch>
    </div>
  )
}

export default SignUpForm