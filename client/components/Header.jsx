import React from 'react'
import { Link, Router } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
    <>
      <div className="header">
        <Link to="/" style={{ textDecoration: 'none' }}> <h1> Covid Goods </h1></Link>
        <div className="searchBar">
          <input type="text" placeholder={'Search...'}/><button><i className="fas fa-search"></i></button>

        </div>
        <div className="login">
          <Link to='/cart'>
            <button className="cartButton">Cart</button>
          </Link>
          <button>Login</button>
        </div>
      </div>
    </>
    )
  }
}

export default Header
