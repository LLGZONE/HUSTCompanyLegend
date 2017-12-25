/**
 * Created by LLGZONE on 2017/10/27.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import routes from '../../../../routes'
import FeatureItem from './FeatureItem'
import 'font-awesome/css/font-awesome.min.css'
import './index.scss'

const Feature = ({exchange, base, help}) => (
  <section className="main-feature">
    <div className="main-feature-bg" />
    <div className="main-feature-container">
      <Link to='/'>
        <FeatureItem
          title="成果转换"
          text={exchange}
        >
          <span className="fa fa-shopping-cart icon-medium" aria-hidden />
        </FeatureItem>
      </Link>
      <Link to={routes.exercitation.base.path}>
        <FeatureItem
          title="实习基地"
          text={base}
        >
          <span className="fa fa-lock icon-medium" aria-hidden>{}</span>
        </FeatureItem>
      </Link>
      <Link to={routes.exercitation.path}>
        <FeatureItem
          title="校企互助"
          text={help}
        >
          <span className="fa fa-reply icon-medium" />
        </FeatureItem>
      </Link>
    </div>
  </section>
)

Feature.propTypes = {
  exchange: PropTypes.string,
  base: PropTypes.string,
  help: PropTypes.string,
}

Feature.defaultProps = {
  exchange: '安全联盟技术、服务和系统的成果转换需求对接',
  base: '联盟企业与高校共同构建的实习基地，为校内人才提供机会',
  help: '校企之间的项目对接、服务对接等',
}
export default Feature