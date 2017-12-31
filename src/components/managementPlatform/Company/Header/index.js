/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import '../../../commons/ExercitationHeader/index.css'
import NavBarItem from '../../../commons/ExercitationHeader/NavBarItem'

import 'font-awesome/css/font-awesome.min.css'
import './index.scss'

const prefix = '/management/company/exercitation'

let navItems, h1

function navBarClick(e) {
  const ele = e.target
  ele.classList.toggle('fa-times')
  ele.classList.toggle('fa-bars')
  navItems.classList.toggle('nav-active')
}

const Header = () => (
  <header className="commons-exercitation-header">
    <h1 ref={ele => h1=ele} style={{textAlign: 'left'}} className="management-header-padding">
      信息与网络空间安全联盟企业管理平台
    </h1>
    <li className="fa fa-bars e-bars" onClick={navBarClick}/>
    <nav ref={nav=>navItems=nav} className="commons-exercitation-nav">
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
    </nav>
    <div className="commons-exercitation-icon">
      <Link to="/">
        <i className="fa fa-mobile">
        </i>
      </Link>
    </div>
    <div className="commons-exercitation-icon">
      <Link to="/exercitation">
        <i className="fa fa-home">
        </i>
      </Link>
    </div>
  </header>
)

export default Header