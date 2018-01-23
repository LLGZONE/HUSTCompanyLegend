import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'
import DevTools from '../containers/DevTools'
import {AppContainer} from 'react-hot-loader'

import Home from '../components/Home'
import Exercitation from '../components/Exercitation'
import CompanyManagement from '../components/managementPlatform/Company'

const Root = ({ store, history }) => (
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/exercitation" component={Exercitation} />
          <Route path="/management/company" component={CompanyManagement} />
          <DevTools />
        </div>
      </ConnectedRouter>
    </Provider>
  </AppContainer>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Root
