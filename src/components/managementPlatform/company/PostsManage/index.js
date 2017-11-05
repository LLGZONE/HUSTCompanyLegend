/**
 * Created by LLGZONE on 2017/11/5.
 */
/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import LineHeader from '../../../commons/LineHeader'

class PostsManage extends React.Component {
  render() {
    const {data} = this.props
    let id = 0

    return (
      <section>
        <LineHeader title="实习岗位列表" style={{fontSize: '20px'}} />
        <table>
          <thead>
          <tr>
            <th>序号</th>
            <th>岗位名称</th>
            <th>发布日期</th>
            <th>结束日期</th>
            <th>报名人数</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          {data.map(item => {
            const {postName, startTime, endTime, total, curPeople} = item

            return (
              <tr key={++id}>
                <td>{id}</td>
                <td>{postName}</td>
                <td>{startTime}</td>
                <td>{endTime}</td>
                <td>{`${total}(${curPeople})`}</td>
                <td>
                  <Link to="/management/company/posts/edit">
                    编辑
                  </Link>
                  <Link to="/management/company/posts/remove">
                    下架
                  </Link>
                  <Link to="/management/company/posts/delete">
                    删除置顶
                  </Link>
                  <Link to="/management/company/posts/publish">
                    发布到首页
                  </Link>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </section>
    )
  }
}

PostsManage.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostsManage