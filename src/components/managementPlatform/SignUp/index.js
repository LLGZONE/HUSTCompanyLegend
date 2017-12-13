/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import PropTypes from 'prop-types'

import LineHeader  from '../../../components/commons/LineHeader/index'
import SignUpForm from './SignUpForm'
import ThirdParty from './ThirdParty'
import {Link} from 'react-router-dom'
import routes from '../../../routes'

const SignUp = ({title}) => (
  <section className="company-signup">
    <LineHeader title={`${title}注册`} style={{fontSize: '20px'}}/>
    <div className="company-signup-main">
      <SignUpForm/>
      <div>
        <div className="company-signup-login">
          <p>
            已有账号？直接 &nbsp;
            <Link to={routes.login.path}>登录</Link>
          </p>
        </div>
        <ThirdParty/>
      </div>
    </div>
  </section>
)

SignUp.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SignUp