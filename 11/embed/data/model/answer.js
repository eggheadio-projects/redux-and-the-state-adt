import composeK from 'crocks/helpers/composeK'
import map from 'crocks/pointfree/map'
import propEq from 'crocks/predicates/propEq'

import {
  assignBy, clampAfter, dec, inc, over
} from '../helpers'

// limitMoves :: (a -> Number) -> a -> Number
const limitMoves =
  clampAfter(0, 8)

// decLeft :: () -> State AppState ()
const decLeft = () =>
  over('left', limitMoves(dec))

// incMoves :: () -> State AppState ()
const incMoves = () =>
  over('moves', limitMoves(inc))

// markSelected :: String -> Object -> Object
const markSelected = id =>
  assignBy(propEq('id', id), { selected: true })

// applyMove :: () -> State AppState ()
const applyMove =
  composeK(decLeft, incMoves)

// selectCard :: String -> State AppState ()
const selectCard = id =>
  over('cards', map(markSelected(id)))

// answer :: String -> State AppState ()
const answer =
  composeK(applyMove, selectCard)

export default answer
