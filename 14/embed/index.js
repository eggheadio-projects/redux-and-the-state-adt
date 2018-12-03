import log from './logger'

import { createAction } from './data/helpers'

const state = {
  cards: [
    { id: 'orange-square', color: 'orange', shape: 'square' },
    { id: 'blue-circle', color: 'blue', shape: 'circle' },
    { id: 'green-circle', color: 'greeen', shape: 'circle' },
  ],
  left: 8,
  moves: 0,
}

log('State ADT Redux Action GO!')
