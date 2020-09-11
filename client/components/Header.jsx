import React from 'react';
import { Link, Router } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<>
				<input type='text' placeholder={'Search...'} />
				<Link to='/cart'>
					<button>Cart</button>
				</Link>
			</>
		);
	}
}

export default Header;
