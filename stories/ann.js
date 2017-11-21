import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'
import '../public/base.css'

import Announcement from '../src/components/Home/Main/Announcement'
import Members from '../src/components/Home/Main/Members'
import LedgendAchievement from '../src/components/Home/Main/Achievement/LedgendAchievement'
import AcademyAchievement from '../src/components/Home/Main/Achievement/AcademyAchievement'

import zuel from '../src/components/Exercitation/images/Base/zuel.png'
import antian from '../src/components/Exercitation/images/Base/antian.png'
import _360 from '../src/components/Exercitation/images/Base/360.png'
import bg from '../src/components/Home/Main/Achievement/bg.jpg'

storiesOf('ann', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('ann', () => <Announcement items={[{title: '舍弗勒倡导组建“产品安全网络”', msg: '2014 包含每个独立 API 的参考资料，这些 API 构成了 Web 强大的脚本可用性。参考资料包含 DOM 以及所有你能用到的用于构建 Web 内容和应用的相关 API 和接口。', year: 17, month: 7}, {title: '舍弗勒倡导组建“产品安全网络”', msg: '2014 包含每个独立 API 的参考资料，这些 API 构成了 Web 强大的脚本可用性。参考资料包含 DOM 以及所有你能用到的用于构建 Web 内容和应用的相关 API 和接口。', year: 17, month: 8}]} />)
  .add('members', () => <Members
    imgUrlArr={[
      {id: 1, alt: 'antian', url: antian},
      {id: 2, alt: 'zuel', url: zuel},
      {id: 3, alt: '360', url: _360},
      {id: 4, alt: 'antian', url: antian},
      {id: 5, alt: 'zuel', url: zuel},
      {id: 6, alt: '360', url: _360},
      ]}
  />)
  .add('legendAchieve', () => <LedgendAchievement subTitles={[{id: 1, title: '我国学者在肠道具核梭杆菌影响大肠杆菌'}, {id: 2, title: '我国学者在肠道具核梭杆菌影响大肠杆菌',}, {id: 3, title: '我国学者在肠道具核梭杆菌影响大肠杆菌'}]} main={{alt: 'th17', title: '我国学者揭示调控TH17细胞因此而有了这一系列', url: bg}}/>)
  .add('academyAchieve', () => <AcademyAchievement projects={[
    {
      id: 1,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
    {
      id: 2,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
    {
      id: 3,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
    {
      id: 4,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
    {
      id: 5,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
    {
      id: 6,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
    {
      id: 7,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
    {
      id: 8,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
    {
      id: 9,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
    {
      id: 10,
      img: {
        url: _360,
        alt: '360',
      },
      type: '技术项目',
      title: '合成橡胶后处理成套工艺装备',
      industry: '生物与医药技术',
      date: '2015-11-15',
    },
  ]}/>)