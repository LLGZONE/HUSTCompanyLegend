/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css'

const Header = () => (
  <header>
    <h1>
      信息与网络空间安全联盟企业管理平台
    </h1>
    <nav>
      <Link to="/management/company/exercitation">
        实习管理
      </Link>
      <Link to="/management/company/achievement/docking">
        成果对接
      </Link>
      <Link to="/management/company/project/docking">
        项目对接
      </Link>
      <Link to="/management/company/member/center">
        会员中心
      </Link>
      <Link to="/">
        <i className="fa fa-mobile">
        </i>
      </Link>
      <Link to="/management/company">
        <i className="fa fa-home">
        </i>
      </Link>
    </nav>
  </header>
)

export default Header