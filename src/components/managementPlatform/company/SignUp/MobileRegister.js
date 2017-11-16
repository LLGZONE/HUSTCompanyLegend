/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import Button from '../../../commons/Button'
import {Field, reduxForm} from 'redux-form'

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
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const renderVerification = ({ input, label, type, meta: { touched, error, warning }}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      <Button value="获取短信验证码"/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const MobileRegister = ({handleSubmit, submitting, pristine, reset}) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="phone"
      type="number"
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
    />
    <div>
      <button type="submit" disabled={submitting}>Submit</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </div>
  </form>
)

export default reduxForm({
  form: 'MobileRegister',
  validate,
})(MobileRegister)