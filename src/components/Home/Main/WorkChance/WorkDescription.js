import React from 'react'
import Clamp from 'shiitake'
import PropTypes from 'prop-types'

const WorkDescription = ({description}) => (
  <div className="work-chance-description">
    <Clamp lines={14} overflowNode={
      <a className="more-info">{'< 查看详情 >'}</a>
    }>
      {description}
      <a className="more-info">{'< 查看详情 >'}</a>
    </Clamp>
    <div>
      <button className="btn">立即报名</button>
      <button className="btn">在线咨询</button>
    </div>
  </div>
)

WorkDescription.propType = {

}

export default WorkDescription