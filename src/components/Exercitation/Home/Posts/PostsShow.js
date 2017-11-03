/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './PostsShow.css'
const PostsShow = ({baseName, company, basePlace, baseProperty, baseMoney, baseMark, children}) => (
  <div className="exercitation-posts-show">
    <div className="exercitation-posts-img">
      {children}
    </div>
    <div>
      <p>{baseName}</p>
      <p>{company}</p>
      <p>{basePlace}</p>
      <div className="exercitation-posts-info">
        <p>{`${baseMoney}/天`}</p>
        <p>{baseProperty}</p>
        <p>{`评分：${baseMark}`}</p>
      </div>
    </div>
  </div>
)

PostsShow.propTypes = {
  baseName: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  basePlace: PropTypes.string.isRequired,
  baseProperty: PropTypes.string.isRequired,
  baseMoney: PropTypes.number.isRequired,
  baseMark: PropTypes.number.isRequired
}

export default PostsShow