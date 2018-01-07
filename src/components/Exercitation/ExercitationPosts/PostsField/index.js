/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'
import PropTypes from 'prop-types'

import CompanyLogo from './CompanyLogo'
import PostInfo from './PostInfo'
import PostsDynamic from './PostsDynamic'

import './index.css'

const PostsField = ({postName, company, place, duration, ddl}) => (
  <section className="exercitationPosts">
    <div className="exercitationPosts-main">
      <CompanyLogo/>
      <PostInfo
        postName={postName}
        company={company}
        place={place}
        duration={duration}
        ddl={ddl}
      />
    </div>
    <PostsDynamic />
  </section>
)


PostsField.propTypes = {
  postName: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  ddl: PropTypes.string.isRequired,
}

export default PostsField