import React from 'react'
import { addToCart } from '../actions'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { removeProduct } from '../actions'

class ProductInformation extends React.Component {
  render() {
    console.log(this.props.location)

    return (
      <>
        <h1>{this.props.location.name}</h1>
        <img src={this.props.location.image} style={{ height: '200px', weight: '200px' }} />
        <h2>${this.props.location.price}</h2>
        <Link to="/"><button>Home</button></Link>
        <button onClick={() => this.props.dispatch(addToCart(this.props.product.id, this.props.product.name))}>Add to Cart</button>
      </>
    )
  }
}

export default connect()(ProductInformation)
