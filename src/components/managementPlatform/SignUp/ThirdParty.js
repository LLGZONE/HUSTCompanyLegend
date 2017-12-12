/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'

import './ThirdParty.scss'

import weibo from './images/weibo.png'
import qq from './images/qq.png'
import weixin from './images/weibo.png'
import zhifubao from './images/zhifubao.png'
import er from './images/er.png'

const ThirdParty = () => (
  <div className="thirdparty-container">
    <p>使用第三方账号登录</p>
    <div className="thirdparty-logo">
      <img src={weibo} alt="微博登录" />
      <img src={qq} alt="QQ登录" />
      <img src={weixin} alt="微信登录" />
      <img src={zhifubao} alt="支付宝登录" />
    </div>
    <div className="thirdparty-er">
      <img src={er} alt="二维码登录" />
    </div>
  </div>
)

export default ThirdParty