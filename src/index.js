import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'

import configureStore from './store/configureStore'
import App from './routes'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
