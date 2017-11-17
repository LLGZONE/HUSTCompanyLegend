/**
 * Created by LLGZONE on 2017/11/6.
 */
import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'

import EmailRegister from './EmailRegister'
import MobileRegister from './MobileRegister'

import '../../../LogIn/LogInType.scss'
import './index.scss'

const SignUpForm = () => {
  const mobilePath = '/management/company/signup/phone'
  const emailPath = '/management/company/signup/email'

  return (
    <div>
      <nav className="company-signup-form-nav">
        <Route
          path={mobilePath}
          children={({ match }) => {
            return (
              <Link to={mobilePath}>
                <div className={match
                  ? 'login-select-type'
                  : 'login-select-type active'}>
                  手机注册
                </div>
              </Link>
            )
          }}
        />
        <Route
          path={emailPath}
          children={({ match }) => {
            return (
              <Link to={emailPath}>
                <div className={match
                  ? 'login-select-type'
                  : 'login-select-type active'}>
                  邮箱注册
                </div>
              </Link>
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