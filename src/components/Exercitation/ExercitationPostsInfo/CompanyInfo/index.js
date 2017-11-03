/**
 * Created by LLGZONE on 2017/11/4.
 */
import React from 'react'
import PropTypes from 'prop-types'

const CompanyInfo = ({imgSrc, companyName, place, size, website}) => (
  <section className="postsInfo-company-info">
    <div className="postsInfo-img-item">
      <img src={imgSrc} alt={companyName} />
    </div>
    <div className="postsInfo-title-item">
      <p>{companyName}</p>
    </div>
    <div className="postsInfo-text-item">
      <p>地址 ：{place}</p>
    </div>
    <div className="postsInfo-text-item">
      <p>规模 ： {size}人</p>
    </div>
    <div className="postsInfo-text-item">
      <p>网址 ： {website}</p>
    </div>
    <div className="postsInfo-text-item">
      <p>联系人 ： 登陆后可见</p>
    </div>
    <div className="postsInfo-text-item">
      <p>电话 ： 登陆后可见</p>
    </div>
  </section>
)

CompanyInfo.propTypes = {
  imgSrc: PropTypes.object.isRequired,
  companyName: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  website: PropTypes.string.isRequired
}

export default CompanyInfo