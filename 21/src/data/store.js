import { createStore, compose } from 'redux'

import identity from 'crocks/combinators/identity'

import reducer from './reducers'
import { initialState } from './model/initialize'

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer,
  initialState(),
  composeEnhancers(identity)
)
