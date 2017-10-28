/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import PropTypes from 'prop-types'

import About from './About'
import HotClicks from './HotClicks'
import JoinUs from './JoinUs'
import LatestArticle from './LatesetArticle'

import './index.css'

const Footer = ({hotClicks, latestArticle}) => (
  <footer className="commons-footer">
    <About />
    <HotClicks hot={hotClicks} />
    <LatestArticle latest={latestArticle} />
    <JoinUs />
  </footer>
)

Footer.propTypes = {
  hotClicks: PropTypes.array.isRequired,
  latestArticle: PropTypes.array.isRequired
}

export default Footer