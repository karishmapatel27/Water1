import { combineReducers } from 'redux'

import navigation from './navigation'
import addToCart from './addToCart'
import removeProduct from './removeProduct'

export default combineReducers({
  navigation,
  addToCart,
  removeProduct
})
