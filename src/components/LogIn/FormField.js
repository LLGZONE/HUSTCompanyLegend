/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import './FormField.scss'

const FormField = ({onSubmit, onChange, to}) => (
  <form className="login-form-field">
    <label className="input-field">
      用户名：
      <input type="text" name="account" placeholder="输入账号" onChange={onChange} />
    </label>
    <label className="input-field">
      密&nbsp;&nbsp;&nbsp;码：
      <input type="password" name="password" placeholder="输入密码" onChange={onChange} />
    </label>
    <div className="btn-field">
      <input type="button" onClick={onSubmit} value="登录" />
      <Link to={to}>
        <button>
          注册
        </button>
      </Link>
    </div>
  </form>
)

FormField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
}

export default FormField