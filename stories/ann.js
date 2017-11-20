import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'
import '../public/base.css'

import Announcement from '../src/components/Home/Main/Announcement'

storiesOf('ann', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('ann', () => <Announcement items={[{title: '舍弗勒倡导组建“产品安全网络”', msg: '2014 包含每个独立 API 的参考资料，这些 API 构成了 Web 强大的脚本可用性。参考资料包含 DOM 以及所有你能用到的用于构建 Web 内容和应用的相关 API 和接口。', year: 17, month: 7}, {title: '舍弗勒倡导组建“产品安全网络”', msg: '2014 包含每个独立 API 的参考资料，这些 API 构成了 Web 强大的脚本可用性。参考资料包含 DOM 以及所有你能用到的用于构建 Web 内容和应用的相关 API 和接口。', year: 17, month: 8}]} />)
