/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import './LogInType.scss'

const LogInType = ({type}) => (
  <nav className="login-select-field">
    <label className={(type === 'company' ? 'active' : '')+' login-select-btn'}>
      <Link to="/exercitation/posts/apply/company">
        企业用户
      </Link>
    </label>
    <label className={(type === 'school' ? 'active' : '')+' login-select-btn'}>
      <Link to="/exercitation/posts/apply/school">
        高校用户
      </Link>
    </label>
    <label className={(type === 'student' ? 'active' : '')+' login-select-btn'}>
      <Link to="/exercitation/posts/apply/student">
        学生用户
      </Link>
    </label>
  </nav>
)

export default LogInType