/**
 * Created by LLGZONE on 2017/11/1.
 */
import React from 'react'

import CompanyLogo from './CompanyLogo'
import PostInfo from './PostInfo'
import PostsDynamic from './PostsDynamic'

import './index.css'

const PostsField = ({handleTime}) => (
  <section className="exercitationPosts">
    <div className="exercitationPosts-main">
      <CompanyLogo/>
      <PostInfo
        postName="大数据平台开发工程师"
        company="360集团有限公司武汉分公司"
        place="武汉/洪山区"
        duration="3个月起"
        ddl="2017-09-30"
      />
    </div>
    <PostsDynamic handleTime={handleTime} />
  </section>
)


export default PostsField