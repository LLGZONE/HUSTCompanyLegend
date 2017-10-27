/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import members1 from '../images/members1.png'
import members2 from '../images/members2.png'
import './index.css'

const Members = () => (
  <section className="home-main-members">
    <div className="home-main-members-side">
      会员风采
    </div>
    <div className="home-main-members-imgs">
      <img src={members1} alt="会员" />
      <img src={members2} alt="会员" />
    </div>
    <div className="home-main-members-side">{}</div>
  </section>
)

export default Members