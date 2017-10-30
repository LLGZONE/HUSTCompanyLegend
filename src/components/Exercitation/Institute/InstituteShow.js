/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './InstituteShow.css'

const InstituteShow = ({course, teacher, host, money, children}) => (
  <div className="exercitation-institute-show">
    {children}
    <div className="exercitation-institute-msg">
      <p>{course}</p>
      <p>{`授课人：${teacher}`}</p>
      <p>{`单 位：${host}`}</p>
    </div>
    <div className="exercitation-institute-bill">
      <p>{money === 0 ? "免费" :  `${money}元`}</p>
    </div>
  </div>
)

InstituteShow.propTypes = {
  course: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
}

export default InstituteShow