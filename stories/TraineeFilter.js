/**
 * Created by LLGZONE on 2017/11/11.
 */
import TraineeFilter from '../src/components/managementPlatform/company/TraineeFilter'
import React from 'react'
import { storiesOf } from '@storybook/react'
import {BrowserRouter as Router} from 'react-router-dom'

const makeData = () => (

)

storiesOf('TraneeFilter', module)
  .addDecorator((story) => <Router>{story()}</Router>)
  .add('table', () => <TraineeFilter
    data={[
      {'name': '1', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '2', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '3', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '4', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '1', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '2', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '3', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '4', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '5', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '1', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '2', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '3', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '4', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '5', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '1', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '2', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '3', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '4', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '5', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '1', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '2', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '3', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '4', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
      {'name': '5', 'sex': '男', 'birthday': '1997-04-12', 'major': 'science', 'from': 'hust'},
    ]}/>)