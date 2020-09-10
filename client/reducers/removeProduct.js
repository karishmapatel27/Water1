const removeProduct = (state = [], action) => {
 switch (action.type) {
  case 'REMOVE_PRODUCT':
   return state.filter(item => item.id !== action.id)
  default:
   return state
 }
}

export default removeProduct