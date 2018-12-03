import chain from 'crocks/pointfree/chain'
import find from 'crocks/Maybe/find'
import option from 'crocks/pointfree/option'
import propEq from 'crocks/predicates/propEq'

import { getState } from '../helpers'

// Card :: { id: String, color: String, shape: String }
// Hint :: { color: String, shape: String }

// getHint :: () -> State AppState Hint

// getCard :: String -> State AppState Card
