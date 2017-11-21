/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import PropTypes from 'prop-types'

import AcademyProject from './AcademyProject'

import './AcademyAchievement.css'

const AcademyAchievement = ({projects}) => (
  <div className="home-main-achieve-academy">
    <div>
      <div>
        <div>
          <p>科技成果</p>
        </div>
        <ul>
          <li>技术项目</li>
          <li>专利项目</li>
          <li>版权项目</li>
          <li>新品种</li>
          <li>商标</li>
        </ul>
        <button>
          发布转让项目
        </button>
      </div>
      <div />
    </div>
    <div>
      <div>
        <p>热门项目</p>
      </div>
      {projects && projects.map(({id, img, type, title, industry, date}) => <AcademyProject img={img} type={type} title={title} industry={industry} date={date} key={id} />)}
    </div>
  </div>
)

AcademyAchievement.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    img: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })),
}

export default AcademyAchievement