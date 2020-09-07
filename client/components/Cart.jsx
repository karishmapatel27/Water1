import React from 'react'
import CartListItem from './CartListItem.jsx'

class Cart extends React.Component {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Beer</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <CartListItem/>
        </tbody>
      </table>
    )
  }
}

export default Cart
