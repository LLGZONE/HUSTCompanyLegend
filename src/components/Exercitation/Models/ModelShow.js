/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './ModelShow.css'

const ModelsShow = ({children, name, info}) => (
  <div className="exercitation-models-show">
    {children}
    <p>{name}</p>
    <p>{info}</p>
  </div>
)

ModelsShow.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
}

export default ModelsShow