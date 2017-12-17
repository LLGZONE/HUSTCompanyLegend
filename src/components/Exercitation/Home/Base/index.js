/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'
import BaseHeader from './BaseHeader'
import BaseShow from './BaseShow'
import BaseMore from '../More'

import routes from '../../../../routes'

import './index.css'

import hust from '../../images/Base/hust.png'
import antian from '../../images/Base/antian.png'
import huot from '../../images/Base/huot.png'
import wu from '../../images/Base/wu.png'
import zuel from '../../images/Base/zuel.png'
import _360 from '../../images/Base/360.png'

const Base = () => (
  <section className="exercitation-base-container">
    <BaseHeader />
    <div className="exercitation-base-show-container">
      <BaseShow
        baseName="华中科技大学—360实习基地"
        basePlace="武汉光谷软件园"
        baseProperty="团体"
        baseTime="1个月以上"
        baseMark={4.5}
        company="360集团公司"
      >
        <img src={hust} alt="hust" />
        <img src={_360} alt="360"/>
      </BaseShow>
      <BaseShow
        baseName="武汉大学—360实习基地"
        basePlace="武汉光谷软件园"
        baseProperty="个人"
        baseTime="3个月以上"
        baseMark={4.5}
        company="360集团公司"
      >
        <img src={wu} alt="武汉大学" />
        <img src={_360} alt="360" />
      </BaseShow>
      <BaseShow
        baseName="武汉理工大学—安天实习基地"
        basePlace="武汉光谷软件园"
        baseProperty="团体"
        baseTime="1个月以上"
        baseMark={4.5}
        company="武汉安天科技"
      >
        <img src={huot} alt="武汉理工" />
        <img src={antian} alt="安天" />
      </BaseShow>
      <BaseShow
        baseName="武汉大学—360实习基地"
        basePlace="武汉光谷软件园"
        baseProperty="个人"
        baseTime="3个月以上"
        baseMark={4.5}
        company="360集团公司"
      >
        <img src={zuel} alt="中南财经政法大学"/>
        <img src={antian} alt="安天" />
      </BaseShow>
    </div>
    <BaseMore url={routes.exercitation.base.path} />
  </section>
)

export default Base