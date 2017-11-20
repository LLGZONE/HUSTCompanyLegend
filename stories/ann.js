import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'
import '../public/base.css'

import Announcement from '../src/components/Home/Main/Announcement'
import Members from '../src/components/Home/Main/Members'
import LedgendAchievement from '../src/components/Home/Main/Achievement/LedgendAchievement'

import zuel from '../src/components/Exercitation/images/Base/zuel.png'
import antian from '../src/components/Exercitation/images/Base/antian.png'
import _360 from '../src/components/Exercitation/images/Base/360.png'

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
  .add('legendAchieve', () => <LedgendAchievement subTitles={['我国学者在肠道具核梭杆菌影响大肠杆菌', '我国学者在肠道具核梭杆菌影响大肠杆菌', '我国学者在肠道具核梭杆菌影响大肠杆菌', '我国学者在肠道具核梭杆菌影响大肠杆菌']} main={{alt: 'th17', title: '我国学者揭示调控TH17细胞', url: _360}}/>)