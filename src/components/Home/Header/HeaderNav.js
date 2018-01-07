/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import { Link } from 'react-router-dom'

import './HeaderNav.scss'
import 'font-awesome/css/font-awesome.min.css'

let navItems;

function navBarClick(e) {
  const ele = e.target
  ele.classList.toggle('fa-times')
  ele.classList.toggle('fa-bars')
  navItems.classList.toggle('nav-active')
}

const HeaderNav = () => (
  <React.Fragment>
    <i className="bar fa fa-bars" onClick={navBarClick}/>
    <nav className="home-nav">
      <ul ref={ul => navItems=ul} className="home-header-nav">
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          联盟概况
        </li>
        <li>
          联盟服务
        </li>
        <li>
          <Link to="/exercitation">实习平台</Link>
        </li>
        <li>
          <Link to="/contact">联系我们</Link>
        </li>
      </ul>
    </nav>
  </React.Fragment>
)

export default HeaderNav