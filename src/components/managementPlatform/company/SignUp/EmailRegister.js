/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {email, required} from '../../../../utils/other/validate'
import {Field, reduxForm} from 'redux-form'
import Button from '../../../commons/Button'
import './SignUpForm.scss'

const renderField = ({ input, type, label, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} placeholder={label} type={type}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
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

const renderVerification = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      <Button value="获取短信验证码"/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const EmailRegister = ({handleSubmit, reset, submitting, pristine}) => (
  <form onSubmit={handleSubmit}>
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
    <div>
      <button type="submit" disabled={submitting}>Submit</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
    </div>
  </form>
)

export default reduxForm({
  name: 'EmailRegister',
  validate
})(EmailRegister)