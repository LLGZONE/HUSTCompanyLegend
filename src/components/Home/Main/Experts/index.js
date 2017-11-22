/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import {Link} from 'react-router-dom'

import './index.scss'

const Experts = () => (
  <div className="home-main-experts">
    <div>
      <p>专家人才</p>
      <Link to="/experts/more">
        <p>更多>></p>
      </Link>
    </div>
    <div>

    </div>
  </div>
)

export default Experts