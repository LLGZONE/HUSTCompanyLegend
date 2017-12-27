import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'

const Expert = ({
  avatar,
  honor,
  name,
  field,
  area,
}) => (
  <div className="expert-container">
    <img className="expert-avatar " src={avatar} alt={name} />
    <div>
      <p className="expert-name">{`${name}${honor ? `——${honor}` : ''}`}</p>
      <p className="expert-info">领域：{field}</p>
      <p className="expert-info">方向：{area}</p>
    </div>
  </div>
)

Expert.propTypes = {
  avatar: PropTypes.string.isRequired,
  honor: PropTypes.string,
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired
}

export default Expert