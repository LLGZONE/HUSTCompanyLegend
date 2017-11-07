import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'

import Home from '../components/Home'
import Exercitation from '../components/Exercitation'

const Root = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={Home} />
      <Route exact path="/exercitation" component={Exercitation} />
    </ConnectedRouter>
  </Provider>
)

Root.propsTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Root
