/**
 * Created by LLGZONE on 2017/11/7.
 */
import React from 'react'
import FadeCarousel from '../../../commons/Carousel/FadeCarousel'

import './index.scss'

import ad1 from '../../images/ad.png'
import ad2 from '../../images/amozon.jpg'
import ad3 from '../../images/brain.jpg'

class AdShow extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.match.url === '/exercitation' || nextProps.match.url === '/exercitation/posts'
  }

  render() {
    return (
      <FadeCarousel className="adshow-container" interval={3000}>
        <img src={ad1} alt="ad" />
        <img src={ad2} alt="ad" />
        <img src={ad3} alt="ads" />
      </FadeCarousel>
    )
  }
}


export default AdShow