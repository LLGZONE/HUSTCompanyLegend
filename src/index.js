import React from 'react'
import ReactDOM from 'react-dom'

import Root from './routes/routes'
import configureStore from './store/configureStore'


const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
