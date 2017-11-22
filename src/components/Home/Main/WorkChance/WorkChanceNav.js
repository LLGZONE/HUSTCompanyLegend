import React from 'react'
import PropTypes from 'prop-types'

const WorkChanceNav = ({
  icon: {url, alt},
  area,   //就业方向
  type,   //简要描述及
}) => (
  <div className="work-chance-nav">
    <img className="icon" src={url} alt={alt} />
    <p className="font">{area}</p>
    <p className="font">{type}</p>
  </div>
)

WorkChanceNav.propTypes = {
  icon: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  area: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default WorkChanceNav