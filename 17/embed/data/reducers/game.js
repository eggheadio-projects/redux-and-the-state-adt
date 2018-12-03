import { createAction, createReducer } from '../helpers'

import start, {
  markCardsUnselected
} from '../model/game'

const HIDE_ALL_CARDS = 'HIDE_ALL_CARDS'
const START_GAME = 'START_GAME'

// hideAllCards :: String -> Action String
export const hideAllCards =
  createAction(HIDE_ALL_CARDS)

// startGame :: String -> Action String
export const startGame =
  createAction(START_GAME)

// reducer :: Reducer
const reducer = createReducer({
  HIDE_ALL_CARDS: markCardsUnselected,
  START_GAME: start
})

export default reducer

