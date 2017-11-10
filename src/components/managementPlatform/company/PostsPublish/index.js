/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import LineHeader from '../../../commons/LineHeader'
import PublishForm from './PublishForm'

class PostsPublish extends React.Component {
  render() {

    return (
      <section>
        <LineHeader title="发布实习岗位" style={{fontSize: '20px'}} />
        <PublishForm/>
      </section>
    )
  }
}

export default PostsPublish