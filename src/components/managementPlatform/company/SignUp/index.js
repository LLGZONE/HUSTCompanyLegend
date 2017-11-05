/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import LineHeader  from '../../../commons/LineHeader'
import SignUpForm from './MobileRegister'
import ThirdParty from './ThirdParty'
import Button from '../../../commons/Button'
import {Link} from 'react-router-dom'

const SignUp = () => (
  <section>
    <LineHeader title="实习单位注册" style={{fontSize: '20px'}}/>
    <SignUpForm/>
    <div>
      <p>
        已有账号？直接
        <Link to="/login">登录</Link>
      </p>
    </div>
    <ThirdParty/>
  </section>
)


export default SignUp