/**
 * Created by LLGZONE on 2017/11/8.
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from '../src/components/managementPlatform/company/Header'
import AsideNav from '../src/components/managementPlatform/company/AsideNav'
import FormTextField from '../src/components/managementPlatform/company/PostsPublish/FormTextField'

storiesOf('company', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('header', () => <Header/>)
  .add('asidenav', () => <AsideNav/>)
  .add('text', () => <FormTextField placeholder="add something"/>)