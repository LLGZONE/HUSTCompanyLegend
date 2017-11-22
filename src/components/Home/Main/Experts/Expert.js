import React from 'react'
import PropTypes from 'prop-types'

const Expert = ({
  img: {src, alt},
  honor,
  name,
  field,
  area,
}) => (
  <div>
    <img src={src} alt={alt} />
    <div>
      <p>{`${name}${honor ? `——${honor}` : ''}`}</p>
      <p>领域：{field}</p>
      <p>方向：{area}</p>
    </div>
  </div>
)

Expert.propTypes = {
  img: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  honor: PropTypes.string,
  name: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired
}

export default Expert