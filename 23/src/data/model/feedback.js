import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import composeK from 'crocks/helpers/composeK'
import constant from 'crocks/combinators/constant'
import converge from 'crocks/combinators/converge'
import equals from 'crocks/pointfree/equals'
import find from 'crocks/Maybe/find'
import liftA2 from 'crocks/helpers/liftA2'
import option from 'crocks/pointfree/option'
import propEq from 'crocks/predicates/propEq'

import {
  clampAfter, decOrInc, getState,
  liftState, over, toHint
} from '../helpers'

// Card :: { id: String, color: String, shape: String }
// Hint :: { color: String, shape: String }

// limitRank :: (a -> Number) -> a -> Number
const limitRank =
  clampAfter(0, 4)

// getCard :: String -> State AppState Card
const getCard = id =>
  getState('cards')
    .map(chain(find(propEq('id', id))))
    .map(option({ id, color: 'unk', shape: 'unk' }))

// getHint :: () -> State AppState Hint
const getHint = () =>
  getState('hint')
    .map(option({ color: 'unk', shape: 'unk' }))

// setIsCorrect :: Boolean -> State AppState ()
const setIsCorrect = isCorrect =>
  over('isCorrect', constant(isCorrect))

// cardToHint :: String -> State AppState Hint
const cardToHint = composeK(
  liftState(toHint),
  getCard
)

// validateAnswer :: String -> State AppState Boolean
const validateAnswer = converge(
  liftA2(equals),
  getHint,
  cardToHint
)

// adjustRank :: Boolean -> Number -> Number
const adjustRank =
  compose(limitRank, decOrInc)

// updateRank :: Boolean -> State AppState ()
const updateRank = isCorrect =>
  over('rank', adjustRank(isCorrect))

// applyFeedback :: Boolean -> State AppState ()
const applyFeedback = converge(
  liftA2(constant),
  setIsCorrect,
  updateRank
)

// feedback :: String -> State AppState ()
const feedback =
  composeK(applyFeedback, validateAnswer)

export default feedback
