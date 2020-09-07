import React from 'react'

class BeerListItem extends React.Component {
  render () {
    return (
        <>
          <li>
            {this.props.beer.name}
            <br></br>
            A {this.props.beer.style} from {this.props.beer.brewery}<br></br>
            {this.props.beer.country} abv {this.props.beer.abv}
          </li>
        </>
    )
  }
}

export default BeerListItem
