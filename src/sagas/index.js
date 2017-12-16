/**
 * Created by LLGZONE on 2017/10/25.
 */
import { fork } from 'redux-saga/effects'

import user from './user'

export default function* root() {
  yield fork(user)
}