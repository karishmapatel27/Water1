import React from 'react'
import { connect } from 'react-redux'
import beers from '../../data/beers'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

class App extends React.Component {
  render () {
    console.log('this.props:', this.props.navigation)
    return (
    <>
      <div className='app'>
        <Header/>
        <BeerList beers={beers}/>
        <Cart/>
        {/* {this.props.navigation === 'listing' ? <Cart/>
          : <BeerList beers ={beers}/>} */}
      </div>
    </>
    )
  }
}

const mapStatetoProps = (state) => {
  console.log('state:', state)
  return {
    navigation: state.navigation
  }
}

export default connect(mapStatetoProps)(App)
