/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'

import './CompanyGallery.scss'

import _360 from '../../images/Base/360.png'
import antian from '../../images/Base/antian.png'
import a from '../../images/Institute/a.png'
import qleaf from '../../images/Institute/qleaf.png'
import ad from '../../images/Institute/ad.png'
import tencent from '../../images/Institute/ten.png'
import baidu from '../../images/Institute/baidu.png'
import mi from '../../images/Institute/mi.png'
import toutiao from '../../images/Institute/toutiao.png'

const CompanyGallery = ({children}) => (
  <div className="exercitation-company-gallery">
    <img src={_360} alt="360" />
    <img src={antian} alt="安天" />
    <img src={qleaf} alt="qleaf" />
    <img src={ad} alt="ad" />
    <img src={a} alt="a" />
    <img src={tencent} alt="腾讯" />
    <img src={baidu} alt="百度" />
    <img src={mi} alt="小米" />
    <img src={toutiao} alt="头条" />
  </div>
)

export default CompanyGallery