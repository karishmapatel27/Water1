import React from 'react'
import { addToCart, removeProduct } from '../actions'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

class ProductInformation extends React.Component {
  render() {
    console.log(this.props.location)

    return (

      <>

        <div className='productInfo'>
          <h2 className='itemName'>{this.props.location.name}</h2>
          <img src={this.props.location.image} style={{ height: '200px', weight: '200px' }} />
          <p className='price'>${this.props.location.price}</p>
          <p>{this.props.location.info}</p>
          <div className='cartBtn'>
            <Link to="/"><button className='btn'>Home</button></Link>
            <button className='btn' onClick={() => this.props.dispatch(addToCart(this.props.location.id, this.props.location.name, this.props.location.price, this.props.location.image))}>Add to Cart</button> </div>
        </div>
        <div className='video'>
          <iframe width="560"
            height="315"
            src='https://www.youtube.com/embed/77IZttD_pU8'
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

      </>

    )
  }
}

export default connect()(ProductInformation)
