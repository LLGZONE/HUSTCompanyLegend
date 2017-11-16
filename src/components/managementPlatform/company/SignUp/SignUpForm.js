/**
 * Created by LLGZONE on 2017/11/6.
 */
import React from 'react'
import {Link, Route} from 'react-router-dom'

import EmailRegister from './EmailRegister'
import MobileRegister from './MobileRegister'
import Button from '../../../commons/Button'

const SignUpForm = () => (
  <div>
    <nav>
      <Route path="/management/company/signup/phone" children={() => {
        return (
          <Link to="/management/company/signup/phone">
            <div>
              手机注册
            </div>
          </Link>
        )
        }}
      />
      <Route path="/management/company/signup/email" children={() => {
        return (
          <Link to="/management/company/signup/email">
            <div>
              邮箱注册
            </div>
          </Link>
        )
      }} />
    </nav>
  </div>
)