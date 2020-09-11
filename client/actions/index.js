// export const actionCreatorName = () => {
//   return {
//     type: 'ACTION_TYPE'
//   }
// }

export const navigate = target => {
  return {
    type: 'NAVIGATE',
    target
  }
}

export const addToCart = (id, name, price, image) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name,
    price,
    image
  }
}

export const removeProduct = (id) => {
  return {
    type: 'REMOVE_PRODUCT',
    id
  }
}
