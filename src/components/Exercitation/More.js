/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import './More.css'

const More = ({url}) => (
  <Link className="exercitation-base-more" to={url}>
    <div >
      查看更多
    </div>
  </Link>
)

More.propTypes = {
  url: PropTypes.string.isRequired
}

export default More
