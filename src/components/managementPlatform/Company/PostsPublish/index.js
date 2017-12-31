/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import LineHeader from '../../../commons/LineHeader'
import PublishForm from './PublishForm'
import './index.scss'

class PostsPublish extends React.Component {
  render() {

    return (
      <section className="posts-publish-container">
        <LineHeader title="发布实习岗位" style={{fontSize: '1.125em'}} />
        <PublishForm/>
      </section>
    )
  }
}

export default PostsPublish