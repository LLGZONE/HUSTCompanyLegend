/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import NavBarItem from './NavBarItem'
import { Link } from 'react-router-dom'

import Logout from '../../../containers/auth/Logout'
import './index.css'

let navItems;

function navBarClick(e) {
  const ele = e.target
  ele.classList.toggle('fa-times')
  ele.classList.toggle('fa-bars')
  navItems.classList.toggle('nav-active')
}

const ExercitationHeader = () => {

  return (
    <div>
      <header className="commons-exercitation-header">
        <h1>信息与网络空间安全实习平台</h1>
        <i className="e-bars fa fa-bars" onClick={navBarClick}/>
        <nav ref={nav=>navItems = nav} className="commons-exercitation-nav">
          <NavBarItem
            to="/exercitation"
            label="实习首页"
            exact={true}
          />
          <NavBarItem
            to="/exercitation/base"
            label="实习基地"
          />
          <NavBarItem
            to="/exercitation/posts"
            label="实习岗位"
          />
          <NavBarItem
            to="/exercitation/institute"
            label="实习学院"
          />
          <NavBarItem
            to="/exercitation/model"
            label="实习标兵"
          />
          <NavBarItem
            to="/member/center"
            label="会员中心"
          />
        </nav>
        <Logout/>
        <div className="commons-exercitation-icon">
          <Link to="/exercitation">
            <i className="fa fa-home">
            </i>
          </Link>
        </div>
      </header>
      <div className="hidden-div">
      </div>
    </div>
  )
}

export default ExercitationHeader