/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'
import InstituteHeader from './InstituteHeader'
import InstituteShow from './InstituteShow'
import InstituteMore from '../More'

import './index.css'

import course1 from '../images/courses/course1.png'
import course2 from '../images/courses/course2.png'
import course3 from '../images/courses/course.png'
import course4 from '../images/courses/course4.png'

const Institute = () => (
  <section className="exercitation-institute-container">
    <InstituteHeader/>
    <div className="exercitation-institute-show-container">
      <InstituteShow
        course="如何让你的简历脱颖而出"
        teacher="王xx教授"
        host="华中科技大学"
        money={0}
      >
        <img src={course1} alt="简历脱颖而出" />
      </InstituteShow>
      <InstituteShow
        course="从零开始学运营"
        teacher="王xx教授"
        host="华中科技大学"
        money={0}
      >
        <img src={course2} alt="从0学运营" />
      </InstituteShow>
      <InstituteShow
        course="前端代码入门篇"
        teacher="王xx教授"
        host="华中科技大学"
        money={0}
      >
        <img src={course3} alt="前端入门" />
      </InstituteShow>
      <InstituteShow
        course="坚果手机视频效果讲解"
        teacher="王xx教授"
        host="华中科技大学"
        money={0}
      >
        <img src={course4} alt="坚果手机视频效果讲解" />
      </InstituteShow>
    </div>
    <InstituteMore url="/institute/more" />
  </section>
)

export default Institute