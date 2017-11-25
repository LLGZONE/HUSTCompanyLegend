/**
 * Created by LLGZONE on 2017/11/4.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {addClassName} from '../../../utils/addClassName'

import './Module.css'

const Module = ({title, children, className, style}) => (
  <section className={addClassName('postsInfo-module-container', className)} style={style}>
    <div className="postsInfo-module-title">
      {title}
    </div>
    {children}
  </section>
)

Module.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Module