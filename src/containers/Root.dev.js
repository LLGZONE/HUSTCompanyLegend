import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'
import DevTools from './DevTools'
import {AppContainer} from 'react-hot-loader'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'

import Home from './Home'
import Exercitation from './Exercitation/index'
import CompanyManagement from './managementPlatform/Company/index'
import routes from '../routes'

const Root = ({ store, history }) => (
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={createMuiTheme({
          palette: {
            primary: {
              50: '#ffede0',
              100: '#ffd3b3',
              200: '#ffb580',
              300: '#ff974d',
              400: '#ff8126',
              500: '#ff6b00',
              600: '#ff6300',
              700: '#ff5800',
              800: '#ff4e00',
              900: '#ff3c00',
              A100: '#ffffff',
              A200: '#fff4f2',
              A400: '#ffcabf',
              A700: '#ffb5a6',
              'contrastDefaultColor': 'dark',
            }
        }
        })}>
          <React.Fragment>
            <Route exact path={routes.home.path} component={Home} />
            <Route path={routes.exercitation.path} component={Exercitation} />
            <Route path={routes.companyManagement.path} component={CompanyManagement} />
            <DevTools />
          </React.Fragment>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  </AppContainer>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default Root
