/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Expert from './Expert'

import './index.scss'

const Experts = ({experts}) => (
  <div className="home-main-experts">
    <div className="header">
      <p className="title xlarge-font">专家人才</p>
      <Link to="/experts/more">
        <p className="more">更多>></p>
      </Link>
    </div>
    <div className="experts-container">
      {experts && experts.map(({avatar, name, field, area, honor}) =>
        <Expert
          avatar={avatar}
          name={name}
          field={field}
          area={area}
          honor={honor}
        />)}
    </div>
  </div>
)

Experts.propTypes = {
  experts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avator: PropTypes.string.isRequired,
    honor: PropTypes.string,
    field: PropTypes.string.isRequired,
    arear: PropTypes.string.isRequired
  }))
}

export default Experts