import { createAction } from '../helpers'

import answer from '../model/answer'
import feedback from '../model/feedback'

const SELECT_CARD = 'SELECT_CARD'
const SHOW_FEEDBACK = 'SHOW_FEEDBACK'

// selectCard :: String -> Action String
export const selectCard =
  createAction(SELECT_CARD)

// showFeedback :: String -> Action String
export const showFeedback =
  createAction(SHOW_FEEDBACK)

// reducer :: Action a -> (State AppState ()) | Null
const reducer = ({ type, payload }) => {
  switch (type) {
    case SELECT_CARD:
      return answer(payload)

    case SHOW_FEEDBACK:
      return feedback(payload)
  }

  return null
}

export default reducer
