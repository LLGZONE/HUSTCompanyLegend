/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import FeatureItem from './FeatureItem'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

const Feature = () => (
  <section>
    <div className="main-feature-bg">{}</div>
    <div className="main-feature-container">
      <FeatureItem
        title="成果转换"
        text="安全联盟技术、服务和系统的成果转换需求对接"
        className="main-feature-item"
      >
        <span className="fa fa-shopping-cart icon-medium" aria-hidden>{}</span>
      </FeatureItem>
      <FeatureItem
        title="实习基地"
        text="联盟企业与高校共同构建的实习基地，为校内人才提供机会"
      >
        <span className="fa fa-lock icon-medium" aria-hidden>{}</span>
      </FeatureItem>
      <FeatureItem
        title="校企互助"
        text="校企之间的项目对接、服务对接等"
      >
        <span className="fa fa-reply icon-medium">{}</span>
      </FeatureItem>
    </div>
  </section>
)
export default Feature