/**
 * Created by LLGZONE on 2017/11/3.
 */
import React from 'react'
import PropTypes from 'prop-types'

import ApplicationBtn from './ApplicationBtn'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'

class Overview extends React.Component {
  star(e) {
    const target = e.target
    target.classList.add('fa-star')
    target.classList.remove('fa-star-o')
  }

  render() {
    const {
      title,
      company,
      place,
      beOfficial,
      mark,
      duration
    } = this.props

    const iconStyle = {
      color: '#FF6B00',
      fontSize: '1.5rem',
      margin: '0 10px',
    }

    return (
      <section className="exercitationInfo-overview">
        <div className="exercitationInfo-overview-text">
          <h3 style={{marginTop: 0}}>{title}</h3>
          <p style={{margin: 0}}>{company}</p>
          <div className="exercitationInfo-overview-row">
            <span style={{display: 'flex', alignItems: 'center'}}>
              <i style={{marginRight: '10px'}} className="fa fa-globe">
              </i>
              <p>{place}</p>
            </span>
            <p style={{marginLeft: '40px'}}>转正机会：{beOfficial ? '有' : '无'}</p>
          </div>
          <div className="exercitationInfo-overview-row">
            <p style={{marginTop: 0}}>岗位评价：{mark}分</p>
            <p style={{marginTop: 0,marginLeft: '40px'}}>实习时间：{duration}</p>
          </div>
        </div>
        <div className="exercitationInfo-overview-btn">
          <div className="exercitationInfo-overview-row">
            <i style={iconStyle} className="fa fa-star-o">
            </i>
            <i style={iconStyle} className="fa fa-check">
            </i>
          </div>
          <ApplicationBtn />
        </div>
      </section>
    )
  }
 }

Overview.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  beOfficial: PropTypes.bool.isRequired,
  mark: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired
}

 export default Overview