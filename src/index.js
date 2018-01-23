import React from 'react'
import ReactDOM from 'react-dom'

import home from './api/home'

import Root from './containers/Root'
import configureStore, {history} from './store/configureStore'
import rootSaga from './sagas'

import 'normalize.css'

let uid = localStorage.getItem('uid')
const cid = localStorage.getItem('cid')

const store = configureStore({
  reducers: {
    home,
    user: {
      uid: uid,
      userType: localStorage.getItem('type'),
      isLogin: uid && true,
    },
    company: {
      cid,
      isPerfectCMsg: cid && true,
    }
  }
})

store.runSaga(rootSaga)
const render = () => {
  ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./routes', () => {
    render()
  })
}
