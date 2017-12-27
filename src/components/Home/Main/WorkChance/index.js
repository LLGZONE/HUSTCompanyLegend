/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import PropTypes from 'prop-types'
import WorkChanceNav from './WorkChanceNav'

import './index.scss'
import WorkDescription from "./WorkDescription";

const WorkChance = ({datas}) => (
  <div className="home-work-chance">
    <div className="header">
      <p>实习机会</p>
    </div>
    <div className="main-container">
      <div className="nav-container">
        {datas && datas.map(({id, icon, area, type}) =>
          <WorkChanceNav
            key={id}
            icon={icon}
            area={area}
            type={type}
          />)}
      </div>
      <div className="description-container">
        <WorkDescription description={datas[0].description} />
      </div>
    </div>
  </div>
)

WorkChance.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    area: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
}

export default WorkChance