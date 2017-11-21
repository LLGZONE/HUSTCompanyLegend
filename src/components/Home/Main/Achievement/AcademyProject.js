import React from 'react'
import PropTypes from 'prop-types'

import './AcademyAchievement.scss'

const fontColor = '#BBBBBB'

const AcademyProject = ({img: {url, alt}, type, title, industry, date}) => (
  <div className="academy-project">
    <img src={url} alt={alt}/>
    <div className="academy-project-main">
      <p>
        <span className="type">[ {type} ]</span>
        {title}
      </p>
      <p style={{color: fontColor}}>行业: {industry}</p>
      <p style={{color: fontColor}}>发布时间: {date}</p>
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