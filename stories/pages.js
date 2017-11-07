/**
 * Created by LLGZONE on 2017/11/7.
 */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import Home from '../src/components/Home'
import Exercitation from '../src/components/Exercitation/Home'
import configureStore, {history} from '../src/store/configureStore'
import ExercitationPosts from '../src/components/Exercitation/ExercitationPosts'
import ExercitationPostsInfo from '../src/components/Exercitation/ExercitationPostsInfo'
import Root from '../src/routes'

const store = configureStore()

storiesOf('Pages', module)

  .add('基本路由', () => <Root store={store} history={history}/>)