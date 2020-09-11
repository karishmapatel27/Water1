import React from 'react'
import { addToCart, removeProduct } from '../actions'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

class ProductInformation extends React.Component {
  render () {
    console.log(this.props.location)

    return (

        <>
          <h2>{this.props.location.name}</h2>
          <img src={this.props.location.image} style={{ height: '200px', weight: '200px' }}/>
          <h2>${this.props.location.price}</h2>
          <Link to="/"><button>Home</button></Link>
          <button onClick={() => this.props.dispatch(addToCart(this.props.location.id, this.props.location.name, this.props.location.price, this.props.location.image)) }>Add to Cart</button>
          <iframe width="560"
            height="315"
            src={this.props.location.video}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </>

    )
  }
}

export default connect()(ProductInformation)
