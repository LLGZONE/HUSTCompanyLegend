/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import Header from './Header'
import Main from './Main'
import FootHeader from './Footer'
import Footer from '../commons/Footer'

import articles from './aticles.json'
import hotClicks from './hotClicks.json'

const Home = () => (
  <div>
    <Header/>
    <Main/>
    <FootHeader/>
    <Footer hotClicks={hotClicks} latestArticle={articles}/>
  </div>
)

export default Home