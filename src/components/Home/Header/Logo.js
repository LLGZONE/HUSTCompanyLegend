/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import logo from '../images/logo.png'
import './Logo.css'

const logoImg = {
  height: '100%',
  width: '100%'
}

const Logo = () => (
  <span className="home-header-logo">
    <img style={logoImg} src={logo} alt="安全产业技术联盟" />
  </span>
)

export default  Logo