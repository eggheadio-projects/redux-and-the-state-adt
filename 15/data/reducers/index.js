import State from 'crocks/State'

import execWith from 'crocks/State/execWith'
import isSameType from 'crocks/predicates/isSameType'
import safe from 'crocks/Maybe/safe'

import turn from './turn'

// reducer :: (AppState, Action a) -> AppState
const reducer = (prev, action) => {
  const result = turn(action)

  return isSameType(State, result)
    ? result.execWith(prev)
    : prev
}

export default reducer
