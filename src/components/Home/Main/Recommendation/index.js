/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import More from './More'
import TalentGallery from './TalentGallery'
import CommonPerson from './CommonPerson'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'

const Recommendation = () => (
  <section className="home-main-rec">
    <div className="home-main-rec-header">
      <div className="home-main-rec-title">
        人才推荐
      </div>
      <More />
    </div>
    <TalentGallery>
      <CommonPerson />
      <CommonPerson />
      <CommonPerson />
      <CommonPerson />
      <CommonPerson />
    </TalentGallery>
  </section>
)

export default Recommendation