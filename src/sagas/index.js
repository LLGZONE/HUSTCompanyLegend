/**
 * Created by LLGZONE on 2017/10/25.
 */
import { fork } from 'redux-saga/effects'

import user from './user'
import exercitation from './exercitation'

export default function* root() {
  yield fork(user)
  yield fork(exercitation)
}