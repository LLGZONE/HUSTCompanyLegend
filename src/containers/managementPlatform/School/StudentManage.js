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
              Header: '学生姓名',
              accessor: 'name',
              className: 'text-center'
            },
            {
              Header: '性别',
              accessor: 'sex',
              className: 'text-center'
            },
            {
              Header: '出生日期',
              accessor: 'birth',
              className: 'text-center'
            },
            {
              Header: '专业',
              accessor: 'major',
              className: 'text-center'
            },
            {
              Header: '实习单位',
              accessor: 'company',
              className: 'text-center'
            },
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