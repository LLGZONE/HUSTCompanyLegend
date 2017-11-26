import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'

import Home from '../components/Home'
import Exercitation from './Exercitation/index'
import CompanyManagement from './managementPlatform/Company/index'

const Root = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/exercitation" component={Exercitation} />
        <Route path="/management/company" component={CompanyManagement} />
      </div>
    </ConnectedRouter>
  </Provider>
)

Root.propsTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Root
