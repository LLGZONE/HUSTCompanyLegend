/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import LineHeader from '../../../commons/LineHeader'
import FormSelect from './FormSelect'

class PostsPublish extends React.Component {
  render() {
    const {companyName} = this.props

    return (
      <section>
        <LineHeader title="发布实习岗位" style={{fontSize: '20px'}} />

      </section>
    )
  }
}

export default PostsPublish