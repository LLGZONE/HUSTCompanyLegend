/**
 * Created by LLGZONE on 2017/11/3.
 */
import React from 'react'

import Overview from '../../components/Exercitation/ExercitationPostsInfo/Overview/index'
import PostsDescription from '../../components/Exercitation/ExercitationPostsInfo/PostsDescription/index'
import CompanyInfo from '../../components/Exercitation/ExercitationPostsInfo/CompanyInfo/index'
import PostsRecommendation from '../../components/Exercitation/ExercitationPostsInfo/PostsRecommendation/index'
import PostsComment from '../../components/Exercitation/ExercitationPostsInfo/PostsComment/index'

import _360 from '../../components/Exercitation/images/Base/360.png'

import '../../components/Exercitation/ExercitationPostsInfo/index.scss'

const ExercitationPostsInfo = () => {
  return (
    <main className="exercitation-posts-info-main">
      <div className="exercitation-posts-info-main-left">
        <Overview
          title="大数据开发工程师"
          company="360集团有限公司武汉分公司"
          place="武汉/洪山区"
          beOfficial={false}
          mark={7.8}
          duration="3个月"
        />
        <PostsDescription/>
        <PostsComment/>
      </div>
      <div className="exercitation-posts-info-main-right">
        <CompanyInfo
          imgSrc={_360}
          companyName="360集团有限公司武汉分公司"
          place="武汉东湖开发区×××"
          size={100}
          website="http://www.360.com"
        />
        <PostsRecommendation/>
      </div>
    </main>
  )
}

export default ExercitationPostsInfo