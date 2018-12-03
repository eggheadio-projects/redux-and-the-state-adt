import log from './logger'

import chain from 'crocks/pointfree/chain'

import { generateCards } from './data/model/game'

const state = {
  colors: [ 'orange', 'green', 'blue', 'yellow' ],
  shapes: [ 'square', 'triangle', 'circle' ]
}

log(
  generateCards()
)
