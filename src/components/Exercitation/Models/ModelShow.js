/**
 * Created by LLGZONE on 2017/10/30.
 */
import React from 'react'
import PropTypes from 'prop-types'

const ModelsShow = ({children, name, info}) => (
  <div>
    {children}
    <p>name</p>
    <p>info</p>
  </div>
)

ModelsShow.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
}

export default ModelsShow