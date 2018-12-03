import converge from 'crocks/combinators/converge'
import curry from 'crocks/helpers/curry'
import liftA2 from 'crocks/helpers/liftA2'
import option from 'crocks/pointfree/option'
import { getState } from '../helpers'

// buildCard :: String -> String -> Card
const buildCard = curry((color, shape) => ({
  id: `${color}-${shape}`, color, shape
}))

// getColors :: () -> State AppState [ String ]

// getShapes :: () -> State AppState [ String ]

// buildCards :: [ String ] -> [ String ] -> [ Card ]

// generateCards :: () -> State AppState [ Card ]
