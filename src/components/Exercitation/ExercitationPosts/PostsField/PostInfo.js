/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css'
import './PostInfo.css'

const PostInfo = ({postName, company, place, duration, beOfficial=false, ddl}) => (
  <Link to="/exercitation/posts/info" >
    <div className="exercitationPosts-posts-info-ctn">
      <h3>{postName}</h3>
      <div className="exercitationPosts-posts-info">
        <span>公司: {company}</span>
        <span>{`实习期: ${duration}`}</span>
        <span>{`转正机会:${beOfficial ? '有': '无'}`}</span>
        <span>
          <i className="fa fa-globe">{}</i>
          {`${place}`}
        </span>
        <span style={{color: '#E51C23'}}>{`报名截止：${ddl}`}</span>
        <span>报名从速！</span>
      </div>
    </div>
  </Link>
)

PostInfo.propTypes = {
  postName: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  beOfficial: PropTypes.bool,
  restPeople: PropTypes.number,
  ddl: PropTypes.string.isRequired
}

export default PostInfo