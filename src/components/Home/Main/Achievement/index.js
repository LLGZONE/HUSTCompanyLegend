/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import PropTypes from 'prop-types'

import AcademyAchievement from './AcademyAchievement'
import LeagueAchievement from './LeagueAchievement'

import './index.scss'

const Achievement = ({league: {main, subTitles}, projects=[]}) => (
  <div className="home-main-achieve">
    <LeagueAchievement main={main} subTitles={subTitles} />
    <AcademyAchievement projects={projects} />
  </div>
)

Achievement.propTypes = {
  league: PropTypes.shape({
    main: PropTypes.object.isRequired,
    subTitles: PropTypes.array,
  }).isRequired,
  projects: PropTypes.array,
}

export default Achievement