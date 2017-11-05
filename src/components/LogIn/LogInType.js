/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'

const LogInType = () => (
  <nav>
    <Link to="/login/company">
      <div>
        企业用户
      </div>
    </Link>
    <Link to="/login/school">
      <div>
        高校用户
      </div>
    </Link>
    <Link to="/login/person">
      <div>
        个人用户
      </div>
    </Link>
  </nav>
)

export default LogInType