import React from 'react'
import PropTypes from 'prop-types'

const AcademyProject = ({img: {url, alt}, type, title, industry, date}) => (
  <div>
    <img src={url} alt={alt}/>
    <div>
      <p>
        <span>[ {type} ]</span>
        {title}
      </p>
      <p>行业: {industry}</p>
      <p>发布时间: {date}</p>
    </div>
  </div>
)

AcademyProject.propTypes = {
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default AcademyProject