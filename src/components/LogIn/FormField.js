/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const FormField = ({onSubmit, onChange, signIn, signUp, to}) => (
  <form onSubmit={onSubmit}>
    <label>
      用户名：
      <input type="text" name="account" placeholder="输入账号" onChange={onChange} />
    </label>
    <label>
      密码：
      <input type="password" name="password" placeholder="输入密码" onChange={onChange} />
    </label>
    <div>
      <input type="submit" value="登录" />
      <Link to={to}>
        <button>
          注册
        </button>
      </Link>
    </div>
  </form>
)

export default FormField