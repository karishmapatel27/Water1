import { combineReducers } from 'redux'

import navigation from './navigation'
import addToCart from './addToCart'

export default combineReducers({
  navigation,
  addToCart
})
