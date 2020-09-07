import React from 'react'

import beers from '../../data/beers'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

class App extends React.Component {
  render () {
    return (
    <>
      <div className='app'>
        <Header/>
        <BeerList beers ={beers}/>
        <Cart/>
      </div>
    </>
    )
  }
}

export default App
