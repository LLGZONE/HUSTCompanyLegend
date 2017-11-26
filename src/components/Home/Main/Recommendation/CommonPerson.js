/**
 * Created by LLGZONE on 2017/10/28.
 */
//为了方便而添加的文件，后期更改
import React from 'react'
import PropTypes from 'prop-types'

import './CommonPerson.css'

const CommonPerson = ({name, school, photo, contactUrls}) => (
  <div className="home-main-rec-person">
    <div className="home-main-rec-hidden-msg">
      <div className="home-main-rec-name">
        <p>{name}</p>
        <p>{school}</p>
      </div>
      <div className="home-main-rec-icons">
        <a src={contactUrls.facebook} alt="facebook"><i  className="fa fa-facebook"/></a>
        <a src={contactUrls.twitter} alt="twitter"><i className="fa fa-twitter" /></a>
        <a src={contactUrls.ins} alt="ins"><i  className="fa fa-instagram"/></a>
      </div>
    </div>
    <div className="home-main-rec-person-img">
      <img src={photo} alt="人才" />
    </div>
  </div>
)

CommonPerson.propTypes = {
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  contactUrls: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    ins: PropTypes.string,
  }),
}

export default CommonPerson