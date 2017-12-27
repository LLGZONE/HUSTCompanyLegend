/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import PropTypes from 'prop-types'
import './FeatureItem.scss'

const FeatureItem = ({title, text, children, style, className}) => (
  <div style={style} className={`${className} main-feature-item`}>
    {children}
    <div className="main-feature-item-message">
      <p>{title}</p>
      <p className="main-feature-font">{text}</p>
    </div>
  </div>
)

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default FeatureItem