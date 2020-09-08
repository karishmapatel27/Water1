import React from 'react'
import { addToCart } from '../actions'
import { connect } from 'react-redux'

class BeerListItem extends React.Component {
  // handleClick = () => {
  //   this.props.dispatch(addToCart(this.props.beer.id, this.props.beer.name))
  // }

  render () {
    const { beer, dispatch } = this.props
    return (
        <>
          <li>
            {this.props.beer.name} <button onClick={() => dispatch(addToCart(beer.id, beer.name)) }>Add to Cart</button>
            <br></br>
            A {this.props.beer.style} from {this.props.beer.brewery}<br></br>
            {this.props.beer.country} abv {this.props.beer.abv}
          </li>
        </>
    )
  }
}

export default connect()(BeerListItem)
