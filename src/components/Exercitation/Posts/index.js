/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react'
import PostsHeader from './PostsHeader'
import More from '../More'
import PostsShow from './PostsShow'

import './index.css'

import _360 from '../images/Base/360.png'
import qleaf from '../images/Institute/qleaf.png'
import antian from '../images/Base/antian.png'
import toutiao from '../images/Institute/toutiao.png'
import a from '../images/Institute/a.png'
import baidu from '../images/Institute/baidu.png'

const Posts = () => (
  <section className="exercitation-posts-container">
    <PostsHeader />
    <div className="exercitation-posts-show-container">
      <PostsShow
        baseName="360集团公司"
        company="360集团公司"
        basePlace="武汉光谷软件园"
        baseProperty="团队"
        baseMoney={200}
        baseMark={4.5}
      >
        <img src={_360} />
      </PostsShow>
      <PostsShow
        baseName="武汉大学—360实习基地"
        company="360集团公司"
        basePlace="武汉光谷软件园"
        baseProperty="团队"
        baseMoney={200}
        baseMark={4.5}
      >
        <img src={qleaf} />
      </PostsShow>
      <PostsShow
        baseName="武汉理工大学—安天实习基地"
        company="武汉安天科技"
        basePlace="武汉光谷软件园"
        baseProperty="团队"
        baseMoney={200}
        baseMark={4.5}
      >
        <img src={antian} />
      </PostsShow>
      <PostsShow
        baseName="中南财经政法大学—安天实习基地"
        company="360集团公司"
        basePlace="武汉光谷软件园"
        baseProperty="团队"
        baseMoney={200}
        baseMark={4.5}
      >
        <img src={toutiao} />
      </PostsShow>
      <PostsShow
        baseName="武汉理工大学—安天实习基地"
        company="武汉安天科技"
        basePlace="武汉光谷软件园"
        baseProperty="团队"
        baseMoney={200}
        baseMark={4.5}
      >
        <img src={a} />
      </PostsShow>
      <PostsShow
        baseName="中南财经政法大学—安天实习基地"
        company="360集团公司"
        basePlace="武汉光谷软件园"
        baseProperty="团队"
        baseMoney={200}
        baseMark={4.5}
      >
        <img src={baidu} />
      </PostsShow>
    </div>
    <More url="/posts/more" />
  </section>
)

export default Posts