import State from 'crocks/State'
import assoc from 'crocks/helpers/assoc'
import composeK from 'crocks/helpers/composeK'
import constant from 'crocks/combinators/constant'
import converge from 'crocks/combinators/converge'
import liftA2 from 'crocks/helpers/liftA2'

import { liftState } from '../helpers'

const { get, modify } = State

// nextSeed :: Integer -> Integer
const nextSeed = seed =>
  (seed * 1103515245 + 12345) & 0x7fffffff

// value :: Integer -> Number
const value = seed =>
  (seed >>> 16) / 0x7fff

// normalize :: (Integer, Integer) -> Number -> Integer
const normalize = (min, max) =>
  x => Math.floor(x * (max - min)) + min

// getNextSeed :: () -> State AppState Integer

// updateSeed :: Integer -> State AppState ()

// nextValue :: Integer -> State AppState Number

// random :: () -> State AppState Number

// between :: (Integer, Integer) -> State AppState Integer
