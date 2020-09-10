import React from 'react'
import BeerListItem from './BeerListItem'

import products from '../../data/beers'
class BeerList extends React.Component {
  render () {
    console.log(this.props)
    return (
        <>
          <div>
            {products.products.map(product => (<BeerListItem key={product.id} product={product}/>))}
          </div>
        </>
    )
  }
}

export default BeerList
