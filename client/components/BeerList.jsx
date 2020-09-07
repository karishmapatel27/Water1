import React from 'react'
import BeerListItem from './BeerListItem'

class BeerList extends React.Component {
  render () {
    return (
        <>
          <ul>
            {this.props.beers.beers.map(beer => (<BeerListItem key={beer.id} beer={beer}/>))}
          </ul>
        </>
    )
  }
}

export default BeerList
