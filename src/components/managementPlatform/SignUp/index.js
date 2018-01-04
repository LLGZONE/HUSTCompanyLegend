/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LineHeader  from '../../../components/commons/LineHeader/index'
import SignUpForm from './SignUpForm'
import ThirdParty from './ThirdParty'
import {Link} from 'react-router-dom'
import routes from '../../../routes'

const SignUp = ({title, identity, isFetching, registerError}) => (
  <section className="company-signup">
    <LineHeader title={`${title}注册`} style={{fontSize: '1.2em'}}/>
    <div className="company-signup-main">
      <SignUpForm identity={identity} isFetching={isFetching} registerError={registerError} />
      <div>
        <div className="company-signup-login">
          <p>
            已有账号？直接
          </p>
          <Link to={routes.login.path}>登录</Link>
        </div>
        <ThirdParty/>
      </div>
    </div>
  </section>
)

SignUp.propTypes = {
  title: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  const { registerError, isFetching } = state.reducers.user

  return {
    registerError,
    isFetching,
  }
}

export default connect(mapStateToProps, null, null, {pure: false})(SignUp)