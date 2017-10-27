/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import AcademyAchievement from './AcademyAchievement'
import LedgendAchievement from './LedgendAchievement'
import './index.css'

const Achievement = () => (
  <div className="home-main-achieve">
    <LedgendAchievement />
    <AcademyAchievement />
  </div>
)

export default Achievement