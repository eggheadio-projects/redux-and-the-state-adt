import log from './logger'

import { createAction } from './data/helpers'

import { hideAllCards, startGame } from './data/reducers/game'
import { selectCard } from './data/reducers/turn'
import reducer from './data/reducers'

import start, {
  markCardsUnselected,
} from './data/model/game'

const sillyVerb =
  createAction('SILLY_VERB')

const state = {
  colors: [ 'orange', 'green', 'blue', 'yellow' ],
  shapes: [ 'square', 'circle', 'triangle' ],
  cards: [],
  isCorrect: null,
  hint: {
    color: 'green',
    shape: 'triangle'
  },
  left: 8,
  moves: 0,
  rank: 4,
  seed: 42,
}

log(
  start()
)
