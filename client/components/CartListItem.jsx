import React from 'react'
import { connect } from 'react-redux'
import { removeProduct } from '../actions'

class CartListItem extends React.Component {
  render () {
    return (
      <>

        {this.props.cart.map(item => {
          return (<div key={item.id}>

            <h2>{item.name}</h2>
            <img src={item.image} style={{ height: '200px', weight: '200px' }} />
            <h2>${item.price}</h2>
            <input className="update-input" value="1" />

            <button onClick={() => this.props.dispatch(removeProduct(item.id))}>Delete</button>
          </div>)
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
