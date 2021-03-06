/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../src/components/managementPlatform/Company/Header'
import AsideNav from '../src/components/managementPlatform/Company/AsideNav'
import FormTextField from '../src/components/managementPlatform/Company/PostsPublish/FormTextField'
import PendingReview from '../src/containers/managementPlatform/Company/PendingReview'
import PostsPublish from '../src/components/managementPlatform/Company/PostsPublish'
import PerfectMessage from '../src/containers/managementPlatform/Company/PerfectMessage/index'
import SignUp from '../src/containers/managementPlatform/SignUp'

import _360 from '../src/components/Exercitation/images/Base/360.png'
import license from '../src/components/managementPlatform/Company/PendingReview/license.png'

import { Provider } from 'react-redux'
import cstore, { history } from '../src/store/configureStore'
import { ConnectedRouter } from 'react-router-redux'

const store = cstore()

storiesOf('company', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('header', () => <Header/>)
  .add('asidenav', () => <AsideNav/>)
  .add('text', () => <FormTextField placeholder="add something" input={{value: '', onChange() {}}}/>)
  .add('pending-review', () => <PendingReview
    logo={_360}
    companyName="360集团有限公司"
    linkman="张某"
    place=""
    size={100}
    phone="1999999999"
    website="www.360.com"
    license={license}
    workImgs={[license, license, license]}
    simpleIntro="sadfsdfwerdfgggggggggggggg"
  />)
  .add('postspublish', () => <Provider store={store}><ConnectedRouter
    history={history}><PostsPublish/></ConnectedRouter></Provider>)
  .add('signup', () => <Provider store={store}>
    <ConnectedRouter history={history}>
      <PerfectMessage/>
    </ConnectedRouter></Provider>)
  .add('log', () => <Provider store={store}>
    <ConnectedRouter history={history}>
      <SignUp/>
    </ConnectedRouter></Provider>)