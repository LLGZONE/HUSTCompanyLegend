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
import { push } from 'react-router-redux'

const SignUp = ({title, identity, isFetching, registerMsg }) => (
  <section className="company-signup">
    <LineHeader title={`${title}注册`} style={{fontSize: '1.2em'}}/>
    <div className="company-signup-main">
      <SignUpForm
        identity={identity}
        isFetching={isFetching}
        push={push}
        registerMsg={registerMsg}
      />
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
  const { registerMsg, isFetching } = state.reducers.user

  return {
    isFetching,
    registerMsg,
  }
}

export default connect(mapStateToProps, {push}, null, {pure: false})(SignUp)