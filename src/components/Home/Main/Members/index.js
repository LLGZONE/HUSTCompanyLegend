/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Members = ({imgUrlArr}) => (
  <section className="home-main-members">
    <div className="home-main-members-side">
      <p style={{margin: 0}}>会员风采</p>
    </div>
    <div className="home-main-members-imgs">
      {imgUrlArr && imgUrlArr.map(img => <img id={img.id} src={img.url} alt={img.alt} />)}
    </div>
    <div className="home-main-members-side" />
  </section>
)

Members.propTypes = {
  imgUrlArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }))
}

export default Members