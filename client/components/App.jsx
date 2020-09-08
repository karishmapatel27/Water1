import React from 'react'
import { connect } from 'react-redux'
import beers from '../../data/beers'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

class App extends React.Component {
  render () {
    console.log(this.props)
    return (
    <>
      <div className='app'>
        <Header/>
        {this.props.navigation === 'listing' ? <BeerList beers ={beers}/>
          : <Cart/>}
      </div>
    </>
    )
  }
}

const mapStatetoProps = (state) => {
  console.log(state)
  return {
    navigation: state.navigation
  }
}

export default connect(mapStatetoProps)(App)
