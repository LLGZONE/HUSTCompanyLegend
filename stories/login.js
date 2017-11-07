/**
 * Created by LLGZONE on 2017/11/6.
 */
import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'
import LogIn from "../src/components/LogIn"

storiesOf('LogIn', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('login', () => <LogIn match={{params: 'company'}} />)