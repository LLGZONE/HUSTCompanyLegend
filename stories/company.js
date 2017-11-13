/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../src/components/managementPlatform/company/Header'
import AsideNav from '../src/components/managementPlatform/company/AsideNav'
import FormTextField from '../src/components/managementPlatform/company/PostsPublish/FormTextField'
import PendingReview from '../src/components/managementPlatform/company/PendingReview'
import PostsPublish from '../src/components/managementPlatform/company/PostsPublish'

import _360 from '../src/components/Exercitation/images/Base/360.png'
import license from '../src/components/managementPlatform/company/PendingReview/license.png'

import {Provider} from 'react-redux'
import cstore, {history} from '../src/store/configureStore'
import {ConnectedRouter} from 'react-router-redux'

const store = cstore()

storiesOf('company', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('header', () => <Header/>)
  .add('asidenav', () => <AsideNav/>)
  .add('text', () => <FormTextField placeholder="add something" input={{value: '', onChange(){}}}/>)
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
  .add('postspublish', () => <Provider store={store}><ConnectedRouter history={history}><PostsPublish/></ConnectedRouter></Provider>)