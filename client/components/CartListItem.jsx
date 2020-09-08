import React from 'react'
import { connect } from 'react-redux'

class CartListItem extends React.Component {
  render () {
    return (
        <>
          <tr>
            <td>HBIB Ginger Fusion</td>
            <td><input className="update-input" value="3"/></td>
            <td><button><span className="fa fa-trash fa-2x"></span></button></td>
          </tr>
          <tr>
            <td>Mangose & Melons</td>
            <td><input className="update-input" value="1"/></td>
            <td><button><span className="fa fa-trash fa-2x"></span></button></td>
          </tr>
          <tr>
            <td>North End Pilsner</td>
            <td><input className="update-input" value="2"/></td>
            <td><button><span className="fa fa-trash fa-2x"></span></button></td>
          </tr>
        </>
    )
  }
}

const mapStatetoProps = (state) => {
  console.log('state:', state)
  return {
    cart: state.addToCart
  }
}

export default connect(mapStatetoProps)(CartListItem)
