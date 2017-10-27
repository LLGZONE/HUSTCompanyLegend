/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import './HeaderNav.css'

const HeaderNav = () => (
  <nav style={{flex: 'auto', textAlign: 'right'}}>
    <ul className="home-header-nav">
      <li>
        <Link to="/">首页</Link>
      </li>
      <li>
        <Link to="/legend/overview">联盟概况</Link>
      </li>
      <li>
        <Link to="/legend/service">联盟服务</Link>
      </li>
      <li>
        <Link to="/member/dynamics">会员动态</Link>
      </li>
      <li>
        <Link to="/member/center">会员中心</Link>
      </li>
      <li>
        <Link to="/connection">联系我们</Link>
      </li>
    </ul>
  </nav>
)

export default HeaderNav