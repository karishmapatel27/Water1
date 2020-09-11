import React from 'react'

class Header extends React.Component {
  render () {
    return (
    <>
    <div className="header">
      <h1 > Covid Goods </h1>
      <input type="text" placeholder={'Search...'}/>
    </div>
    </>
    )
  }
}

export default Header
