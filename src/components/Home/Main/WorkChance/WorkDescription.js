import React from 'react'
import Clamp from 'shiitake'
import PropTypes from 'prop-types'
import addSpace from '../../../../utils/addSpace'

import './WorkDescription.scss'

const WorkDescription = ({description}) => (
  <div className="work-chance-description">
    <Clamp lines={14} overflowNode={
      <a className="more-info">{'< 查看详情 >'}</a>
    } className="pre-paragraph" >
      {addSpace(description)}
    </Clamp>
    <div style={{textAlign: 'right'}}>
      <button className="btn">立即报名</button>
      <button className="btn">在线咨询</button>
    </div>
  </div>
)

WorkDescription.propType = {
  description: PropTypes.string.isRequired,
}

export default WorkDescription