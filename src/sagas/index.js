/**
 * Created by LLGZONE on 2017/10/25.
 */
import {take, put, call, fork, select} from 'redux-saga/effects'
import * as actions from '../actions/index'
import {selectedRedditSelector, postsByRedditSelector} from "../reducers/selectors"


export default function* root() {
}