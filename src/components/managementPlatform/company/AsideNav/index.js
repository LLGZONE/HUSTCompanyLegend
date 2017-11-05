/**
 * Created by LLGZONE on 2017/11/5.
 */
import React from 'react'
import {Link} from 'react-router-dom'

const AsideNav = () => (
  <section>
    <nav>
      <div>
        <h3>岗位管理</h3>
        <Link>
          发布岗位
        </Link>
      </div>
      <div>
        <h3>实习生管理</h3>
        <p>实习筛选</p>
      </div>
      <div>
        <h3>用户中心</h3>
        <p>完善信息</p>
      </div>
    </nav>
  </section>
)

export default AsideNav