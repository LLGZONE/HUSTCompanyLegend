/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import { connect } from 'react-redux'
import { email, required } from '../../../utils/validate'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { renderCheck } from './MobileRegister'

import './SignUpForm.scss'
import WarnText from '../../commons/WarnText'
import { register } from '../../../actions/user'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="company-signup-render-field">
    <input {...input} placeholder={label} type={type}/>
    {touched && (error && <WarnText text={error} className="company-signup-render-warn-text"/>)}
  </div>
)

const renderVerification = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="company-signup-render-verify">
    <input {...input} placeholder={label} type={type}/>

    <button name={'verify'}>获取邮箱验证码</button>
    {touched && (error && <WarnText text={error} className="company-signup-render-warn-text"/>)}
  </div>
)

const validate = values => {
  const errors = {}

  if (!values.password) {
    errors.password = '必填项'
  } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(values.password)) {
    errors.password = '密码太简单'
  }
  if (values.password !== values.repassword) {
    errors.repassword = '密码不正确'
  }
  if (!values.verification) {
    errors.verification = '输入邮箱验证码'
  }

  return errors
}

const EmailRegister = ({
                         handleSubmit,
                         submitting,
                         checked = false,
                         eml,
                         password,
                         verify,
                         register,
                         identity,
                         isFetching = false,
                         registerError = false,
                         valid,
  type: usertype
                       }) => (
  <form className="company-signup-form-main" onSubmit={handleSubmit}>
    <Field
      name="phone"
      type="text"
      label="邮箱"
      component={renderField}
      validate={[required, email]}
    />
    <Field
      name="password"
      type="password"
      label="密码"
      component={renderField}
      validate={[required]}
    />
    <Field
      name="repassword"
      type="password"
      label="再次输入密码"
      component={renderField}
      validate={required}
    />
    <Field
      name="verification"
      type="text"
      label="邮箱验证码"
      component={renderVerification}
      validate={[required]}
      onChange={(e, newValue) => {
        if (newValue.length > 6) {
          e.preventDefault()
        }
      }}
    />
    <Field
      name="accept"
      type="checkbox"
      component={renderCheck}
    />
    <button onSubmit={() => {
      register({ email: eml, password, verify, identity, usertype })
    }} type="submit" disabled={submitting || !checked || !valid} className="company-signup-form-btn">
      {isFetching ? '注册中...' : '注册'}
    </button>
    {registerError && <p style={{color: 'red'}}>{registerError}</p>}
  </form>
)

const EmailRegisterValue = reduxForm({
  form: 'EmailRegister',
  validate,
})(EmailRegister)

const selector = formValueSelector('EmailRegister')

export default connect(state => {
  const checked = selector(state, 'accept')
  const eml = selector(state, 'email')
  const password = selector(state, 'password')
  const verify = selector(state, 'verification')

  return {
    checked,
    eml,
    password,
    verify,
  }
}, { register: register.request })(EmailRegisterValue)