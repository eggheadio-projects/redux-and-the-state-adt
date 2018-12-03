import { createStore, applyMiddleware, compose } from 'redux'

import asyncMiddleware from './middleware/async'
import multiMiddleware from './middleware/multi'

import reducer from './reducers'
import { initialState } from './model/initialize'

const middleware = applyMiddleware(
  asyncMiddleware,
  multiMiddleware
)

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  initialState(),
  composeEnhancers(middleware)
)
