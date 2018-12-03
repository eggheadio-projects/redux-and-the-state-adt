import converge from 'crocks/combinators/converge'
import composeK from 'crocks/helpers/composeK'
import constant from 'crocks/combinators/constant'
import filter from 'crocks/pointfree/filter'
import identity from 'crocks/combinators/identity'
import liftA2 from 'crocks/helpers/liftA2'
import pick from 'crocks/helpers/pick'
import option from 'crocks/pointfree/option'

import { getAt, liftState, over, selectState } from '../helpers'

// notSelected :: Card -> Boolean
const notSelected =
  ({ selected }) => !selected

// toHint :: Object -> Hint
const toHint =
  pick([ 'color', 'shape' ])

// getUnselectedCards :: () -> State AppState [ Card ]

// pickCard :: [ Card ] -> State AppState Card

// setHint :: Card -> State AppState ()

// nextHint :: () -> State AppState ()
