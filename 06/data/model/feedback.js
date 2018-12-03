import chain from 'crocks/pointfree/chain'
import composeK from 'crocks/helpers/composeK'
import constant from 'crocks/combinators/constant'
import converge from 'crocks/combinators/converge'
import equals from 'crocks/pointfree/equals'
import find from 'crocks/Maybe/find'
import liftA2 from 'crocks/helpers/liftA2'
import omit from 'crocks/helpers/omit'
import option from 'crocks/pointfree/option'
import propEq from 'crocks/predicates/propEq'

import { getState, liftState, over } from '../helpers'

// Card :: { id: String, color: String, shape: String }
// Hint :: { color: String, shape: String }

// getHint :: () -> State AppState Hint
const getHint = () =>
  getState('hint')
    .map(option({ color: 'unk', shape: 'unk' }))

// getCard :: String -> State AppState Card
const getCard = id =>
  getState('cards')
    .map(chain(find(propEq('id', id))))
    .map(option({ id, color: 'unk', shape: 'unk' }))

// setIsCorrect :: Boolean -> State AppState ()

// cardToHint :: String -> State AppState Hint

// validateAnswer :: String -> State AppState Boolean

// feedback :: String -> State AppState ()
