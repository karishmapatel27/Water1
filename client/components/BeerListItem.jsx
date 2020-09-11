import React from 'react';
import { addToCart } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BeerListItem extends React.Component {
	render() {
		return (
			<>
				<div>
					{' '}
					<Link
						to={{
							pathname: '/productInformation',
							image: this.props.product.image,
							name: this.props.product.name,
							price: this.props.product.price,
						}}
					>
						<img
							src={this.props.product.image}
							style={{ height: '200px', weight: '200px' }}
						/>
					</Link>
					{this.props.product.name}
				</div>
			</>
		);
	}
}

export default connect()(BeerListItem);
