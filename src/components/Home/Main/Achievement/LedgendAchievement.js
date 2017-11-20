/**
 * Created by LLGZONE on 2017/10/28.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Clamp from 'shiitake'

import './LedgendAchievement.css'
import 'font-awesome/css/font-awesome.min.css'

const LedgendAchievement = ({main, subTitles}) => (
  <div className="home-main-achieve-legend">
    <div>
      <i className="fa fa-book" />
      <div><p>联盟成果</p></div>
      <Link>更多>></Link>
      <div>
        <span />
      </div>
    </div>
    <div>
      <div>
        <img src={main.url} alt={main.alt}/>
        <Clamp lines={1} className="">
          {main.title}
        </Clamp>
      </div>
      <ul>
        {subTitles && subTitles.map(subTitle => <li key={subTitle.id}>
          <Clamp lines={1} className="">{subTitle.title}</Clamp>
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