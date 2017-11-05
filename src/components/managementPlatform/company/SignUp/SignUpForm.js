/**
 * Created by LLGZONE on 2017/11/6.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../../../commons/Button'
import EmailRegister from './EmailRegister'
import MobileRegister from './MobileRegister'

const SignUpForm = () => (
  <div>
    <nav>
      <Button value="手机注册" url="/management/company/signup/mobile" />
      <Button value="邮箱注册" url="/management/company/signup/email" />
    </nav>
  </div>
)