/**
 * Created by LLGZONE on 2017/10/29.
 */
import React from 'react';

import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'

import Exercitation from '../src/components/commons/ExercitationHeader'
import Slider from '../src/components/commons/Carousel/InfiniteSlider'
import member from '../src/components/Home/Main/images/members1.png'
import LineHeader from "../src/components/commons/LineHeader/index"
import BaseShow from '../src/components/Exercitation/Home/Base/BaseShow'
import Base from '../src/components/Exercitation/Home/Base'
import CompanyGallery from '../src/components/Exercitation/Home/CompanyGallery/index'
import Posts from '../src/components/Exercitation/Home/Posts'
import Institute from '../src/components/Exercitation/Home/Institute'
import Models from '../src/components/Exercitation/Home/Models'
import QueryField from '../src/components/Exercitation/ExercitationPosts/QueryField'
import PostsField from '../src/components/Exercitation/ExercitationPosts/PostsField'
import FilterItem from '../src/components/Exercitation/ExercitationPosts/FilterField/FilterItem'
import FilterField from '../src/components/Exercitation/ExercitationPosts/FilterField'

import zuel from '../src/components/Exercitation/images/Base/zuel.png'
import antian from '../src/components/Exercitation/images/Base/antian.png'



storiesOf('Exercitation', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('header', () => <Exercitation/>)
  .add('slider', () => <Slider><img src={member} /><img src={member} /><img src={member}/> <img src={member}/></Slider>)
  .add('lineHeader', () => <LineHeader title="实习基地" />)
  .add('baseShow', () => <BaseShow
    baseName="武汉大学—360实习基地"
    basePlace="武汉光谷软件园"
    baseProperty="个人"
    baseTime="3个月以上"
    baseMark={4.5}
    company="360集团公司"
  >
    <img src={zuel} alt="中南财经政法大学"/>
    <img src={antian} alt="安天" />
  </BaseShow>)
  .add('base', () => <Base />)
  .add('gallery', () => <CompanyGallery />)
  .add('posts', () => <Posts/>)
  .add('institute', () => <Institute/>)
  .add('models', () => <Models />)
  .add('queryField', () => <QueryField/>)
  .add('postsField', () => <PostsField handleTime="2017-09-08"/>)
  .add('filterItem', () => <FilterItem title="实习地点"><button>北京</button><button>sad京</button></FilterItem>)
  .add('filterField', () => <FilterField/>)