/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import HeaderNav from './HeaderNav'
import Logo from './Logo'
import './index.css'

const Header = () => (
  <header className="home-header">
    <Logo />
    <HeaderNav/>
  </header>
)

export default Header