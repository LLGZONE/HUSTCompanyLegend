/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import LineHeader from '../../../commons/LineHeader'

const TraineeFilter = ({data, employ, abandon}) => {
  let id = 0

  return (
    <section>
      <LineHeader title="大数据开发工程师实习名单" style={{fontSize: '20px'}}/>
      <table>
        <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>性别</th>
          <th>生日</th>
          <th>学校</th>
          <th>专业</th>
          <th>来源</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tr>
          {data.map(item => {
            const {name, sex, birth, school, major, origin, status} = item

            return (
              <tr key={++id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{sex}</td>
                <td>{birth}</td>
                <td>{school}</td>
                <td>{major}</td>
                <td>{origin}</td>
                <td>status</td>
                <td>
                  <Link >
                    详情
                  </Link>
                  <span onClick={employ}>
                    录用
                  </span>
                  <span onClick={abandon}>
                    放弃面试
                  </span>
                </td>
              </tr>
            )
          })}
        </tr>
      </table>
    </section>
  )
}