import { createAction, createReducer } from '../helpers'

import start, { markCardsUnselected } from '../model/game'
import initialize from '../model/initialize'

const HIDE_ALL_CARDS = 'HIDE_ALL_CARDS'
const RESET_GAME = 'RESET_GAME'
const START_GAME = 'START_GAME'

// hideAllCards :: String -> Action String
export const hideAllCards =
  createAction(HIDE_ALL_CARDS)

// resetGame :: () -> Action String
export const resetGame =
  createAction(RESET_GAME)

// startGame :: String -> Action String
export const startGame =
  createAction(START_GAME)

// reducer :: Reducer
const reducer = createReducer({
  HIDE_ALL_CARDS: markCardsUnselected,
  RESET_GAME: initialize,
  START_GAME: start
})

export default reducer

