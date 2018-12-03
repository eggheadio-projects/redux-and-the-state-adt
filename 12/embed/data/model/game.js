import Pair from 'crocks/Pair'
import bimap from 'crocks/pointfree/bimap'
import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import converge from 'crocks/combinators/converge'
import curry from 'crocks/helpers/curry'
import fanout from 'crocks/helpers/fanout'
import identity from 'crocks/combinators/identity'
import liftA2 from 'crocks/helpers/liftA2'
import option from 'crocks/pointfree/option'
import snd from 'crocks/Pair/snd'

import { getAt, getState, liftState, unsetAt } from '../helpers'

import { randomIndex } from './random'

// buildCard :: String -> String -> Card
const buildCard = curry((color, shape) => ({
  id: `${color}-${shape}`, color, shape
}))

// getColors :: () -> State AppState [ String ]
const getColors = () =>
  getState('colors')
    .map(option([]))

// getShapes :: () -> State AppState [ String ]
const getShapes = () =>
  getState('shapes')
    .map(option([]))

// buildCards :: [ String ] -> [ String ] -> [ Card ]
const buildCards =
  liftA2(buildCard)

// generateCards :: () -> State AppState [ Card ]
export const generateCards = converge(
  liftA2(buildCards),
  getColors,
  getShapes
)

// drawCardAt :: Integer -> [ Card ] -> Deck
const drawCardAt = index => compose(
  bimap(Array.of, identity),
  fanout(getAt(index), unsetAt(index))
)

// Deck :: Pair [ Card ] [ Card ]

// draw :: Integer -> Deck -> Deck

// drawRandom :: Deck -> State AppState Deck

// getDeck :: () -> State AppState Deck
