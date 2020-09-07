import React from 'react'

class BeerListItem extends React.Component {
  render () {
    return (
        <>
          <li>
            {this.props.beer.name}
          </li>
        </>
    )
  }
}

export default BeerListItem
