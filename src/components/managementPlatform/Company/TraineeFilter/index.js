/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import ReactTable from 'react-table'
import LineHeader from '../../../commons/LineHeader'
import TablePagination from '../../../commons/TablePagination'

import '../PostsManage/index.scss'

const TraineeFilter = ({data, employ, abandon}) => {

  return (
    <section>
      <LineHeader title="大数据开发工程师实习名单" style={{fontSize: '20px'}}/>
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
            className: 'text-center'
          },
          {
            Header: '姓名',
            accessor: 'name',
            className: 'text-center'
          },
          {
            Header: '性别',
            accessor: 'sex',
            className: 'text-center'
          },
          {
            Header: '生日',
            accessor: 'birthday',
            className: 'text-center'
          },
          {
            Header: '专业',
            accessor: 'major',
            className: 'text-center'
          },
          {
            Header: '来源',
            accessor: 'from',
            className: 'text-center'
          },
          {
            Header: '操作',
            sortable: false,
            filterable: false,
            Cell() {
              return (
                <div>
                  <Link to="/detail">
                    详情
                  </Link>
                  <Link to="/luyont">
                    录用
                  </Link>
                  <Link to="/abandon">
                    放弃
                  </Link>
                  <Link to="/mianshi">
                    面试
                  </Link>
                </div>
              )
            }
          }
        ]}
        showPagination
        PaginationComponent={TablePagination}
      />
    </section>
  )
}

TraineeFilter.propTypes = {
  data: PropTypes.array.isRequired,
}

export default TraineeFilter