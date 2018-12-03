import log from './logger'

import {
  drawRandom, getDeck
} from './data/model/game'

const state = {
  colors: [ 'orange', 'green', 'blue', 'yellow' ],
  shapes: [ 'square', 'triangle', 'circle' ],
  cards: [],
  seed: 23
}

log(
  getDeck()
    // .chain(drawRandom)
    .evalWith(state)
)
