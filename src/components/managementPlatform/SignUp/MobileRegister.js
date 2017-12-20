/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import WarnText from '../../commons/WarnText'

import './SignUpForm.scss'

const validate = values => {
  const errors = {}
  if (!values.phone) {
    errors.phone = '必填项'
  } else if (!/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(values.phone)) {
    errors.phone = '请输入正确的电话号码'
  }
  if (!values.password) {
    errors.password = '必填项'
  } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(values.password)) {
    errors.password = '密码太简单'
  }
  if (values.password !== values.repassword) {
    errors.repassword = '密码不正确'
  }
  if (!values.verification) {
    errors.verification = '输入短信验证码'
  }

  return errors
}

const renderField = ({input, label, type, meta: {touched, error}}) => (
  <React.Fragment>
    <div className="company-signup-render-field">
      <input {...input} placeholder={label} type={type}/>
      {touched && (error && <WarnText text={error} className="company-signup-render-warn-text" />)}
    </div>
  </React.Fragment>
)

const renderVerification = ({input, label, type, meta: {touched, error}}) => (
  <React.Fragment>
    <div className="company-signup-render-verify">
      <input {...input} placeholder={label} type={type}/>
      <button name={'verify'}>获取短信验证码</button>
      {touched && (error && <WarnText text={error} className="company-signup-render-warn-text"/>)}
    </div>
  </React.Fragment>
)

export const renderCheck = ({input, type,}) => (
  <label className="company-signup-render-check">
    <input type={type} {...input} />
    <span>我已阅读并同意<a href="#">《校企联盟实习平台用户协议》</a></span>
  </label>
)

const MobileRegister = ({handleSubmit, submitting, checked=false}) => (
  <form className="company-signup-form-main" onSubmit={handleSubmit}>
    <Field
      name="phone"
      type="text"
      label="请输入手机号码"
      component={renderField}
    />
    <Field
      name="password"
      type="password"
      label="请输入密码"
      component={renderField}
    />
    <Field
      name="repassword"
      type="password"
      label="请再次输入密码"
      component={renderField}
    />
    <Field
      name="verification"
      type="text"
      label="短信验证码"
      component={renderVerification}
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
    <button type="submit" disabled={submitting || !checked} className="company-signup-form-btn">注册</button>
  </form>
)

const MobileRegisterValue = reduxForm({
  form: 'MobileRegister',
  validate,
})(MobileRegister)

const selector = formValueSelector('MobileRegister')

export default connect(state => {
  const checked = selector(state, 'accept')

  return {
    checked
  }
})(MobileRegisterValue)