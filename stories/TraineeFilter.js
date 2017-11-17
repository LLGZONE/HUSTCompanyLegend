/**
 * Created by LLGZONE on 2017/11/11.
 */
import TraineeFilter from '../src/components/managementPlatform/Company/TraineeFilter'
import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'
import range from '../src/utils/other/range'
import namor from 'namor'
import PostsManage from '../src/components/managementPlatform/Company/PostsManage'

const newPerson = () => {
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    sex: Math.floor(Math.random()) + 1,
    birthday: Math.floor(Math.random() * 50) + 1970,
    major: Math.floor(Math.random() * 100),
    from: 'Hust'
  }
}

const makeData = (len) => {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

const newPer = () => {
  return {
    postName: namor.generate({ words: 1, numbers: 0 }),
    startDate: Math.floor(Math.random() * 50) + 1970,
    endDate: Math.floor(Math.random() * 50) + 1970,
    total: 30,
    enrollment: 5,
  }
}

const makeData1 = (len) => {
  return range(len).map(d => {
    return {
      ...newPer(),
      children: range(10).map(newPer)
    };
  });
}

storiesOf('TraneeFilter', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('table', () => <TraineeFilter
    data={makeData(500)}/>)
  .add('postsManage', () => <PostsManage data={makeData1(500)} />)