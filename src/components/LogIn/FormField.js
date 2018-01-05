/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import './FormField.scss'

const FormField = ({onSubmit, onChange, to, progress=false}) => (
  <form onSubmit={onSubmit} className="login-form-field">
    <label className="input-field">
      <span style={{width: '4em'}}>用户名：</span>
      <input type="text" name="account" placeholder="输入账号" onChange={onChange} />
    </label>
    <label className="input-field">
      <span style={{width: '4em'}}>
      密&nbsp;&nbsp;&nbsp;码：
      </span>
      <input
        type="password"
        name="password"
        placeholder="输入密码"
        onChange={onChange}
      />
    </label>
    <div className="btn-field">
      <input
        type="submit"
        disabled={progress}
        value={progress ? '登陆中...' : '登陆'}
      />
      <Link to={to}>
        <input
          type="button"
          value="注册"
        />
      </Link>
    </div>
  </form>
)

FormField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  progress: PropTypes.bool,
}

export default FormField