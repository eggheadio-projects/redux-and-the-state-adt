import Endo from 'crocks/Endo'
import Pair from 'crocks/Pair'
import bimap from 'crocks/pointfree/bimap'
import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import composeK from 'crocks/helpers/composeK'
import constant from 'crocks/combinators/constant'
import converge from 'crocks/combinators/converge'
import curry from 'crocks/helpers/curry'
import fanout from 'crocks/helpers/fanout'
import identity from 'crocks/combinators/identity'
import liftA2 from 'crocks/helpers/liftA2'
import mreduce from 'crocks/helpers/mreduce'
import option from 'crocks/pointfree/option'
import snd from 'crocks/Pair/snd'

import {
  getAt, getState, liftState, over, repeat, unsetAt
} from '../helpers'

import { randomIndex } from './random'

// Deck :: Pair [ Card ] [ Card ]

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
const generateCards = converge(
  liftA2(buildCards),
  getColors,
  getShapes
)

// drawCardAt :: Integer -> [ Card ] -> Deck
const drawCardAt = index => compose(
  bimap(Array.of, identity),
  fanout(getAt(index), unsetAt(index))
)

// getDeck :: () -> State AppState Deck
const getDeck = () =>
  generateCards()
    .map(xs => Pair([], xs))

// draw :: Integer -> Deck -> Deck
const draw =
  compose(chain, drawCardAt)

// drawRandom :: Deck -> State AppState Deck
const drawRandom = converge(
  liftA2(draw),
  compose(randomIndex, snd),
  liftState(identity)
)

// drawNine :: State AppState Deck -> State AppState Deck
const drawNine = mreduce(
  Endo,
  repeat(9, chain(drawRandom))
)

// drawFromDeck :: () -> State AppState Deck
const drawFromDeck =
  compose(drawNine, getDeck)

// setCards :: Deck -> State AppState ()
const setCards = deck =>
  over('cards', constant(deck.fst()))

// pickCards :: () -> State AppState ()
export const pickCards =
  composeK(setCards, drawFromDeck)
