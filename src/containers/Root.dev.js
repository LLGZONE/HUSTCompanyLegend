import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'
import DevTools from './DevTools'
import {AppContainer} from 'react-hot-loader'

import Home from './Home'
import Exercitation from './Exercitation/index'
import CompanyManagement from './managementPlatform/Company/index'
import routes from '../routes'

const Root = ({ store, history }) => (
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path={routes.home.path} component={Home} />
          <Route path={routes.exercitation.path} component={Exercitation} />
          <Route path={routes.companyManagement.path} component={CompanyManagement} />
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
