import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { persistState } from 'redux-devtools'
import createSagaMiddleware from 'redux-saga'
import {reducer as formReducer} from 'redux-form'

import reducers from '../reducers'
import middlewares from '../utils/middlewares'

import DevTools from '../containers/DevTools'

const sagaMiddleware = createSagaMiddleware()
const configureStore = (routerReducer, middleware) => preloadedState => {
  const store = createStore(
    combineReducers({
      reducers,
      router: routerReducer,
      form: formReducer
    }),
    preloadedState,
    compose(
      applyMiddleware(middleware, ...middlewares, sagaMiddleware),
      DevTools.instrument(),
      persistState(
        window.location.href.match(
          /[?&]debug_session=([^&#]+)\b/
        )
      ),
    )
  )

  return {
    ...store,
    runSaga: sagaMiddleware.run
  }
}

export default configureStore
