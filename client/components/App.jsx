import React from 'react'
import beers from '../../data/beers'
import Header from './Header'
import BeerList from './BeerList'

class App extends React.Component {
  render () {
    return (
    <>
      <div className='app'>
          Ready to rock and roll
        {/* <Header/> */}
        <BeerList beers ={beers}/>
      </div>
    </>
    )
  }
}

export default App
