/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import PropTypes from 'prop-types'

import More from './More'
import TalentGallery from './TalentGallery'
import CommonPerson from './CommonPerson'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'

const Recommendation = ({talents}) => (
  <section className="home-main-rec">
    <div className="home-main-rec-header">
      <div className="home-main-rec-title">
        人才推荐
      </div>
      <More />
    </div>
    <TalentGallery>
      {talents && talents.map(({name, school, photo, contactUrls}) =>
        <CommonPerson
          key={name}
          name={name}
          school={school}
          photo={photo}
          contactUrls={contactUrls}
        />)}
    </TalentGallery>
  </section>
)

Recommendation.propTypes = {
  talents: PropTypes.arrayOf(PropTypes.object),
}

export default Recommendation