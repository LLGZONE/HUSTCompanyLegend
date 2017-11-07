/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'

const ExercitationHeader = () => (
  <div>
    <header className="commons-exercitation-header">
      <h1>信息与网络空间安全实习平台</h1>
      <nav className="commons-exercitation-nav">
        <Link to="/exercitation">
          实习首页
        </Link>
        <Link to="/base">
          实习基地
        </Link>
        <Link to="/exercitation/posts">
          实习岗位
        </Link>
        <Link to="/school">
          实习学院
        </Link>
        <Link to="/model">
          实习标兵
        </Link>
        <Link to="/center">
          会员中心
        </Link>
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

export default ExercitationHeader