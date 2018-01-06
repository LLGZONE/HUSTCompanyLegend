import React from 'react'
import { Link } from 'react-router-dom'

import LogOut from '../../../../containers/auth/Logout'

import '../../../commons/ExercitationHeader/index.css'
import 'font-awesome/css/font-awesome.min.css'
import '../../Company/Header/index.scss'

const Header = () => (
  <header className="commons-exercitation-header">
    <h1 style={{textAlign: 'left'}} className="management-header-padding">
      信息与网络空间安全联盟企学生管理平台
    </h1>
    <LogOut/>
    <div className="commons-exercitation-icon">
      <Link to="/exercitation">
        <i className="fa fa-home">
        </i>
      </Link>
    </div>
  </header>
)

export default Header