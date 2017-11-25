/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const Members = ({memebers}) => (
  <section className="home-main-members">
    <div className="home-main-members-side">
      <p style={{margin: 0}}>会员风采</p>
    </div>
    <div className="home-main-members-imgs">
      {memebers && memebers.map(member => <member id={member.id} src={member.url} alt={member.alt} />)}
    </div>
    <div className="home-main-members-side" />
  </section>
)

Members.propTypes = {
  memebers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }))
}

export default Members