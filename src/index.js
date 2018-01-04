import React from 'react'
import ReactDOM from 'react-dom'

import home from './api/home'

import Root from './containers/Root'
import configureStore, {history} from './store/configureStore'
import rootSaga from './sagas'

import 'normalize.css'

let uid = localStorage.getItem('uid')
const expire = localStorage.getItem('expire') || 0
if (Date.now() > parseInt(localStorage.getItem('last'), 10) + parseInt(expire, 10)) {
  uid = false
}

const store = configureStore({
  reducers: {
    home,
    user: {
      uid: uid,
      type: localStorage.getItem('type'),
      isLogin: uid && true
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
