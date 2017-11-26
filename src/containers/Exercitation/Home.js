/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'

import Base from '../../components/Exercitation/Home/Base/index'
import CompanyGallery from '../../components/Exercitation/Home/CompanyGallery/index'
import Posts from '../../components/Exercitation/Home/Posts/index'
import Institute from '../../components/Exercitation/Home/Institute/index'
import Models from '../../components/Exercitation/Home/Models/index'

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