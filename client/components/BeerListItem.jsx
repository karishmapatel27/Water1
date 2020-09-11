import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class BeerListItem extends React.Component {
  render () {
    return (
			<>
				<div className="listItem">
				  <Link
				    to={{
				      pathname: '/productInformation',
				      image: this.props.product.image,
				      name: this.props.product.name,
				      price: this.props.product.price,
				      video: this.props.product.video,
				      id: this.props.product.id,
				      info: this.props.product.info
				    }}
				  >
				    <img
				      src={this.props.product.image}
				      style={{ height: '200px', weight: '200px' }}
				    />
				  </Link>
				  <h3><a href="">{this.props.product.name}</a></h3>
				   <p>${this.props.product.price}.00</p>
				</div>
			</>
    )
  }
}

export default connect()(BeerListItem)
