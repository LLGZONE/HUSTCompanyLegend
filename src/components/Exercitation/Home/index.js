/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'

import ExercitationHeader from '../../commons/ExercitationHeader'
import Base from './Base'
import CompanyGallery from './CompanyGallery'
import Posts from './Posts'
import Institute from './Institute'
import Models from './Models'
import Footer from '../../commons/Footer'

import hotClicks from '../../Home/hotClicks.json'
import articles from '../../Home/aticles.json'

const ExercitationHome = () => (
  <div>
    <ExercitationHeader/>
    <Base/>
    <CompanyGallery/>
    <Posts/>
    <Institute/>
    <Models/>
    <Footer hotClicks={hotClicks} latestArticle={articles}/>
  </div>
)

export default ExercitationHome