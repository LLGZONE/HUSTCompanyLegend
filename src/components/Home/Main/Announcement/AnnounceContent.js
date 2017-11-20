/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Clamp from 'shiitake'

import './AnnounceContent.scss'

const AnnounceContent = ({items}) => (
  <div className="home-main-ann-container">
    <div className="home-main-ann-header">
      <p className="home-main-ann-head">联盟动态 通知公告</p>
      <Link to="/announcement/more"><span className="home-main-ann-more small-font">更多</span></Link>
    </div>
    {items.map(item => (
      <div className="home-main-ann-content">
        <div className="home-main-ann-time">
          <p style={{fontSize: '2em'}}>{item.year}</p>
          <p className="medium-font">{`${item.month}月`}</p>
        </div>
        <div>
          <p className="home-main-ann-title large-font">{item.title}</p>
          <Clamp lines={2} className="home-main-ann-msg medium-font">{item.msg}</Clamp>
        </div>
      </div>
    ))}
  </div>
)

AnnounceContent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }))
}

export default AnnounceContent