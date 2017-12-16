import React from 'react'
import ReactDOM from 'react-dom'

import home from './api/home'

import Root from './containers/Root'
import configureStore, {history} from './store/configureStore'
import rootSaga from './sagas'

import 'normalize.css'

const store = configureStore({
  reducers: {
    home,
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
