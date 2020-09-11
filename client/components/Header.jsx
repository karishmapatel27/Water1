import React from 'react'
import { Link, Router } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
    <>
      <div className="header">
        <Link to="/" style={{ textDecoration: 'none' }}> <h1> Covid Goods </h1></Link>
        <input type="text" placeholder={'Search...'}/>
        <Link to='/cart'>
          <button>Cart</button>
        </Link>
        <button>Login</button>
      </div>
    </>
    )
  }
}

export default Header
