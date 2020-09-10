import React from 'react'
import { addToCart } from '../actions'
import { connect } from 'react-redux'

class BeerListItem extends React.Component {
  render () {
    const { product, dispatch } = this.props
    return (
        <>
          <div> <img src={this.props.product.image} style={{ height: '200px', weight: '200px' }}/>{this.props.product.name}<button onClick={() => dispatch(addToCart(product.id, product.name)) }>Add to Cart</button></div>
        </>
    )
  }
}

export default connect()(BeerListItem)
