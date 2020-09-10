import React from 'react'
import BeerListItem from './BeerListItem'

class BeerList extends React.Component {
  render () {
    return (
        <>
          <div>
            {this.props.products.products.map(product => (<BeerListItem key={product.id} product={product}/>))}
          </div>
        </>
    )
  }
}

export default BeerList
