/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import { connect } from 'react-redux'
import { email, required } from '../../../utils/validate'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Button from '../../../components/commons/Button/index'
import { renderCheck } from './MobileRegister'

import './SignUpForm.scss'
import WarnText from '../../commons/WarnText'

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div className="company-signup-render-field">
    <input {...input} placeholder={label} type={type}/>
    {touched && ((error && <WarnText text={error}/>) || (warning && <span>{warning}</span>))}
  </div>
)

const renderVerification = ({input, label, type, meta: {touched, error, warning}}) => (
  <div className="company-signup-render-verify">
    <input {...input} placeholder={label} type={type}/>

    <Button value="获取邮箱验证码"/>
    {touched && ((error && <WarnText text={error}/>) || (warning && <span>{warning}</span>))}
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
}

const EmailRegister = ({handleSubmit, submitting, checked=false}) => (
  <form className="company-signup-form-main" onSubmit={handleSubmit}>
    <Field
      name="phone"
      type="number"
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
    />
    <Field
      name="accept"
      type="checkbox"
      component={renderCheck}
    />
    <button type="submit" disabled={submitting || !checked} className="company-signup-form-btn">注册</button>
  </form>
)

const EmailRegisterValue = reduxForm({
  form: 'EmailRegister',
  validate,
})(EmailRegister)

const selector = formValueSelector('EmailRegister')

export default connect(state => {
  const checked = selector(state, 'accept')

  return {
    checked
  }
})(EmailRegisterValue)