import React from 'react'
import { connect } from 'react-redux'
import products from '../../data/beers'
import { navigate } from '../actions'

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
        {/* <BeerList beers={beers}/>
        <Cart/> */}
        {this.props.navigation === 'listing' ? <BeerList products ={products}/>
          : <Cart/>}
        <button onClick={() => this.props.dispatch(navigate('lising')) }>listing</button>
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
