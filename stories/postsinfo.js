/**
 * Created by LLGZONE on 2017/11/4.
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'

import Overview from '../src/components/Exercitation/ExercitationPostsInfo/Overview'

storiesOf('PostsInfo', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('overview', () => <Overview title="大数据平台开发工程师" company="360集团有限公司武汉分公司" place="武汉/洪山区" beOfficial={false} mark={7.8} duration="三个月"/>)