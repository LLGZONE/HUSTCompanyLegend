import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {reducer  as formReducer} from 'redux-form'

import reducers from '../reducers'
import middlewares from '../utils/middlewares'

const sagaMiddleware = createSagaMiddleware()
const configureStore = (routerReducer, middleware) => preloadedState => (
  {
    ...createStore(
      combineReducers({
        reducers,
        router: routerReducer,
        form: formReducer
      }),
      preloadedState,
      applyMiddleware(...middlewares, middleware, sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run
  }
)

export default configureStore