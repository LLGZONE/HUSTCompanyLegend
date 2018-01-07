import React from 'react'
import PropTypes from 'prop-types'
import LineHeader from '../../../components/commons/LineHeader/index'
import ReactTable from 'react-table'
import TablePagination from '../../../components/commons/TablePagination/index'

import 'react-table/react-table.css'
import '../../../components/managementPlatform/Company/PostsManage/index.scss'

class PostsManage extends React.Component {
  render() {
    const {data} = this.props

    return (
      <section style={{marginBottom: '20px'}}>
        <LineHeader title="实习岗位列表" style={{fontSize: '1.125em'}} />
        <ReactTable
          data={data}
          columns={[
            {
              Header: '序号',
              Cell({ viewIndex }) {
                return viewIndex + 1
              },
              sortable: false,
              filterable: false,
              className: 'text-center',
              width: 50,
            },
            {
              Header: '岗位名称',
              accessor: 'postName',
              className: 'text-center'
            },
            {
              Header: '发布单位',
              accessor: 'company',
              className: 'text-center'
            },
            {
              Header: '岗位类别',
              accessor: 'postType',
              className: 'text-center'
            },
            {
              Header: '操作',
              Cell() {
                return <div className="posts-manage-operation">
                  <span>
                    查看详情
                  </span>
                  <span>
                    允许
                  </span>
                  <span>
                    不允许
                  </span>
                </div>
              },
              width: 230
            }
          ]}
          showPagination
          PaginationComponent={TablePagination}
        />
      </section>
    )
  }
}

PostsManage.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostsManage