import React from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '../actions'

class CartListItem extends React.Component {
  render() {
    console.log(this.props.cart[0])
    return (
      <>

        {this.props.cart.map(item => {
          return (<tr key={item.id}>
            <td >{item.name}</td>
            <td><input className="update-input" value="1" /></td>
            <td><button><span className="fa fa-trash fa-2x"></span></button></td>
            <button onClick={() => this.props.dispatch(removeProduct(this.props.product.id))}>Delete</button>
          </tr>)
        })}

      </>
    )
  }
}

const mapStatetoProps = (state) => {
  console.log('state:', state)
  return {
    cart: state.addToCart
  }
}

export default connect(mapStatetoProps)(CartListItem)
