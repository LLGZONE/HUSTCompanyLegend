/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import {Link, Route} from 'react-router-dom'
import NavBarItem from './NavBarItem'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'

const ExercitationHeader = () => {

  return (
    <div>
      <header className="commons-exercitation-header">
        <h1>信息与网络空间安全实习平台</h1>
        <nav className="commons-exercitation-nav">
          <NavBarItem
            to="/exercitation"
            label="实习首页"
          />
          <NavBarItem
            to="/base"
            label="实习基地"
          />
          <NavBarItem
            to="/exercitation/posts"
            label="实习岗位"
          />
          <NavBarItem
            to="/school"
            label="实习学院"
          />
          <NavBarItem
            to="/model"
            label="实习标兵"
          />
          <NavBarItem
            to="/member/center"
            label="会员中心"
          />
        </nav>
        <div className="commons-exercitation-icon">
          <i className="fa fa-mobile" aria-hidden="true">
          </i>
        </div>
      </header>
      <div className="hidden-div">
      </div>
    </div>
  )
}

export default ExercitationHeader