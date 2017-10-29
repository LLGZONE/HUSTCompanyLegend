/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './BaseShow.css'
const BaseShow = ({baseName, basePlace, company,baseProperty, baseTime, baseMark, children}) => (
  <div className="exercitation-base-show">
    <div className="exercitation-base-img">
      {children[0]}
    </div>
    <div>
      <p>{baseName}</p>
      <p>{company}</p>
      <p>{basePlace}</p>
      <div className="exercitation-base-info">
        <p>{baseProperty}</p>
        <p>{baseTime}</p>
        <p>{baseMark}</p>
      </div>
    </div>
    <div className="exercitation-base-img">
      {children[1]}
    </div>
  </div>
)

BaseShow.propTypes = {
  baseName: PropTypes.string.isRequired,
  basePlace: PropTypes.string.isRequired,
  baseProperty: PropTypes.string.isRequired,
  baseTime: PropTypes.string.isRequired,
  baseMark: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired
}

export default BaseShow