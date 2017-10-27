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

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Home', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('Header', () => <Header/>)

storiesOf('Main', module)
  .add('Feature', () => <Feature/>)
  .add('Announcement', () => <Announcement/>)
  .add('Members', () => <Members/>)
  .add('Achievement', ()=> <Achievement/>)