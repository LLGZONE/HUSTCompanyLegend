/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import LineHeader  from '../../../commons/LineHeader'
import SignUpForm from './SignUpForm'
import ThirdParty from './ThirdParty'
import {Link} from 'react-router-dom'

const SignUp = () => (
  <section>
    <LineHeader title="实习单位注册" style={{fontSize: '20px'}}/>
    <div className="company-signup-main">
      <SignUpForm/>
      <div>
        <div>
          <p>
            已有账号？直接
            <Link to="/login">登录</Link>
          </p>
        </div>
        <ThirdParty/>
      </div>
    </div>
  </section>
)

export default SignUp