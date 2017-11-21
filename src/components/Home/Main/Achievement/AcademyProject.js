import React from 'react'
import PropTypes from 'prop-types'

import './AcademyAchievement.scss'

const AcademyProject = ({img: {url, alt}, type, title, industry, date}) => (
  <div className="academy-project">
    <img src={url} alt={alt}/>
    <div className="academy-project-main">
      <p style={{margin: 0, lineHeight: '2em'}}>
        <span className="type">[ {type} ]</span>
        {title}
      </p>
      <p className="font" style={{marginTop: '10px'}}>行业: {industry}</p>
      <p className="font">发布时间: {date}</p>
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