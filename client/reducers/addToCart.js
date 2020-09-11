// export const ADD_TO_CART = 'ADD_TO_CART'

const addToCart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          image: action.image,
          price: action.price,
          quantity: '1'
        }
      ]
    default:
      return state
  }
}

export default addToCart
