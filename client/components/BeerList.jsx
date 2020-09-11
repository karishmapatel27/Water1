import React from 'react'
import BeerListItem from './BeerListItem'

import products from '../../data/beers'
class BeerList extends React.Component {
  render () {
    console.log(this.props)
    return (
        <>
          <img className="banner" src="https://thumbs.dreamstime.com/b/super-sale-hottest-deal-promotion-sale-wide-banner-vector-illust-illustration-87838647.jpg" alt=""/>
          <div className="list">
            {products.products.map(product => (<BeerListItem key={product.id} product={product}/>))}
          </div>
        </>
    )
  }
}

export default BeerList
