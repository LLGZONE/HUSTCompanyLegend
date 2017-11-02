/**
 * Created by LLGZONE on 2017/11/3.
 */
import React from 'react'
import Pagination from '../src/components/ExercitationPosts/Pagination'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'

storiesOf('Pagination', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('2 10 5',() => <Pagination pageIndex={2} maxPageIndex={10} size={5}/>)
  .add('2 10 3',() => <Pagination pageIndex={2} maxPageIndex={10} size={3}/>)
  .add('8 10 5',() => <Pagination pageIndex={8} maxPageIndex={10} size={5}/>)
  .add('12 14 4',() => <Pagination pageIndex={12} maxPageIndex={14} size={4}/>)
  .add('13 14 4',() => <Pagination pageIndex={13} maxPageIndex={14} size={4}/>)
  .add('2 4 5',() => <Pagination pageIndex={2} maxPageIndex={4} size={5}/>)