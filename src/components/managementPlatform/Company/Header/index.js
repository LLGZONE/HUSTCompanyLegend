/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import '../../../commons/ExercitationHeader/index.css'
import NavBarItem from '../../../commons/ExercitationHeader/NavBarItem'

import 'font-awesome/css/font-awesome.min.css'

const prefix = '/management/company/exercitation'

const Header = () => (
  <header className="commons-exercitation-header">
    <h1 style={{textAlign: 'left', paddingLeft: '40px'}}>
      信息与网络空间安全联盟企业管理平台
    </h1>
    <nav className="commons-exercitation-nav">
      <NavBarItem
        to={prefix}
        label="实习管理"
      />
      <NavBarItem
        to="/management/company/achievement/docking"
        label="成果对接"
      />
      <NavBarItem
        to="/management/company/project/docking"
        label="项目对接"
      />
      <NavBarItem
        to="/management/company/member/center"
        label="会员中心"
      />
      <div className="commons-exercitation-icon">
        <Link to="/">
          <i className="fa fa-mobile">
          </i>
        </Link>
      </div>
      <div className="commons-exercitation-icon">
        <Link to="/management/company">
          <i className="fa fa-home">
          </i>
        </Link>
      </div>
    </nav>
  </header>
)

export default Header