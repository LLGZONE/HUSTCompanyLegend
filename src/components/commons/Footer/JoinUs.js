/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import './JoinUs.css'

const JoinUs = () => (
  <div>
    <h3>加入联盟</h3>
    <div className="common-footer-join-container">
      <div className="common-footer-join-reason">
        <p>校企对接</p>
        <p>精准撮合</p>
        <p>多方共赢</p>
      </div>
      <div className="common-footer-join-btn-container">
        <Link to="/join">
          <div className="common-footer-join-btn">
            加入联盟
          </div>
        </Link>
      </div>
    </div>
  </div>
)

export default JoinUs