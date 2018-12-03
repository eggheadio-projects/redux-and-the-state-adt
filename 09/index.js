import log from './logger'

// Filter Unselected Cards
// Randomly choose an Unselected Card
// Set Hint

const state = {
  cards: [
    { id: 'orange-square', color: 'orange', shape: 'square' },
    { id: 'blue-circle', color: 'blue', selected: true, shape: 'circle' },
    { id: 'green-square', color: 'green', shape: 'square' },
    { id: 'green-triangle', color: 'green', shape: 'triangle' },
  ],
  hint: null,
  seed: Date.now(),
}

log(state)
