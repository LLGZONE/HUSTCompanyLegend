/**
 * Created by LLGZONE on 2017/11/6.
 */
import React from 'react'
import LineHeader from '../../../commons/LineHeader'

import Button from '../../../commons/Button'

const PendingReview = ({
  logo,         //公司 logo
  companyName,  //公司名字
  linkman,      //联系人
  place,        //电话
  size,         //规模
  phone,        //电话
  website,      //网站
  license,      //营业执照
  workImgs,     //工作环境
  simpleIntro   //简介
}) => (
  <main>
    <LineHeader title="请耐心等待校方审核"/>
    <div>
      <div>
        <img src={logo} alt={`${companyName}`} />
      </div>
      <p>{companyName}</p>
      <p>
        地址：{`${place}`}
      </p>
      <p>
        规模：{`${size}`}
      </p>
      <p>
        网址：{`${website}`}
      </p>
      <p>
        联系人：{`${linkman}`}
      </p>
      <p>
        电话：{`${phone}`}
      </p>
    </div>
    <div>
      <img src={license} alt={`${companyName}信誉凭证`} />
    </div>
    <div>
      {workImgs.map(imgSrc => <img src={imgSrc} alt="工作环境" />)}
    </div>
    <div>
      {simpleIntro}
    </div>
    <div>
      <Button value="撤回"/>
      <Button value="修改"/>
    </div>
  </main>
)