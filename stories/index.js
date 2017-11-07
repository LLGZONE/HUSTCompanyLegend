import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Header from '../src/components/Home/Header'
import {BrowserRouter as Router} from 'react-router-dom'

import Feature from '../src/components/Home/Main/Feature'
import Announcement from '../src/components/Home/Main/Announcement'
import Members from '../src/components/Home/Main/Members'
import Achievement from '../src/components/Home/Main/Achievement'
import CommonPerson from '../src/components/Home/Main/Recommendation/CommonPerson'
import Recommendation from '../src/components/Home/Main/Recommendation'
import Footer from '../src/components/Home/Footer'
import Main from '../src/components/Home/Main'

import Home from '../src/components/Home'

import CommonFooter from '../src/components/commons/Footer'


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Home', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('Header', () => <Header/>)
  .add('index', ()=><Home />)

storiesOf('Main', module)
  .add('Feature', () => <Feature/>)
  .add('Announcement', () => <Announcement/>)
  .add('Members', () => <Members/>)
  .add('Achievement', () => <Achievement/>)
  .add('CommonPerson', () => <CommonPerson/>)
  .addDecorator((story)=><Router>{story()}</Router>)
  .add('Recommendation', () => <Recommendation />)
  .add('index', () => <Main />)

const hotClicks = [
  {
    url: 'www.baidu.com',
    text: '关于第三批试点产业技术创新战略联盟提交联络信息的通知'
  },
  {
    url: 'www.baidu.com',
    text: '舍弗勒倡导组件"产品安全网络"'
  },
  {
    url: 'www.baidu.com',
    text: '安全技术创新战略联盟筹备会邀请函'
  },
  {
    url: 'www.baidu.com',
    text: '安全技术创新战略联盟筹备会邀请函'
  },
  {
    url: 'www.baidu.com',
    text: '关于组织填报产业技术创新战略联盟信息的通知'
  }
]

const latestArticle = [
  {
    url: 'www.baidu.com',
    text: '360企业安全集团'
  },
  {
    url: 'www.baidu.com',
    text: '武汉思为网络技术股份有限公司'
  },
  {
    url: 'www.baidu.com',
    text: '武汉虹旭信息技术有限责任公司'
  },
  {
    url: 'www.baidu.com',
    text: '武汉天喻信息产业有限责任公司'
  },
  {
    url: 'www.baidu.com',
    text: '武汉达梦数据库有限公司'
  },
]

storiesOf('Footer', module)
  .add('footer', () => <Footer />)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('commonFooter', () => <CommonFooter hotClicks={hotClicks} latestArticle={latestArticle}/>)

