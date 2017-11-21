/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Clamp from 'shiitake'
import addSpace from '../../../../utils/other/addSpace'

import './LedgendAchievement.scss'
import 'font-awesome/css/font-awesome.min.css'

const LedgendAchievement = ({main, subTitles}) => (
  <div className="home-achieve-legend">
    <div className="home-achieve-legend-header">
      <div className="fa fa-book xlarge-font icon" />
      <div className="home-achieve-legend-title">
        <p>联盟成果</p>
      </div>
      <Link to="more"><span className="right" style={{color: 'black'}}>更多>></span></Link>
    </div>
    <div className="l-border">
      <div className="s-border"/>
    </div>
    <div className="main">
      <div className="main-thumb">
        <img src={main.url} alt={main.alt}/>
        <div className="main-thumb-desp">
          <Clamp lines={1} className="main-thumb-shiitake">
            {addSpace(main.title)}
          </Clamp>
        </div>
      </div>
      <ul className="main-list">
        {subTitles && subTitles.map(subTitle => <li className="main-list-item" key={subTitle.id}>
          <Clamp lines={1} className="main-list-shiitake">{addSpace(subTitle.title)}</Clamp>
        </li>)}
      </ul>
    </div>
  </div>
)

LedgendAchievement.propTypes = {
  main: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  subTitles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
}

export default LedgendAchievement