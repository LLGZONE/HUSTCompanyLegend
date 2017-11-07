/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'

import Base from './Base'
import CompanyGallery from './CompanyGallery'
import Posts from './Posts'
import Institute from './Institute'
import Models from './Models'

const ExercitationHome = () => (
  <div>
    <main style={{padding: '0 40px'}}>
      <Base/>
      <CompanyGallery/>
      <Posts/>
      <Institute/>
      <Models/>
    </main>
  </div>
)

export default ExercitationHome