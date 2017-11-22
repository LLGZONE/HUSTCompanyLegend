import React from 'react'
import Clamp from 'shiitake'
import PropTypes from 'prop-types'

const WorkDescription = ({description}) => (
  <div>
    <Clamp lines={14} className="" overflowNode={
      <a>{'< 查看详情 >'}</a>
    }>
      {description}
      <a>{'< 查看详情 >'}</a>
    </Clamp>
    <div>
      <button>立即报名</button>
      <button>在线咨询</button>
    </div>
  </div>
)

WorkDescription.propType = {

}

export default WorkDescription