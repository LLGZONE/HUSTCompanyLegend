/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './PostsDynamic.scss'

const PostsDynamic = ({concern=0, reader=0, handleTime}) => (
  <div className="exercitationPosts-posts-dynamic">
    <p>关注：{`${concern}人`}</p>
    <p>阅读： {`${reader}人`}</p>
    <p>HR处理：{`${handleTime}`}</p>
  </div>
)

PostsDynamic.propTypes = {
  concern: PropTypes.number,
  reader: PropTypes.number,
  handleTime: PropTypes.string.isRequired
}

export default PostsDynamic