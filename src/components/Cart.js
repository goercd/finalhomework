import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'


/* вывод списка выбранных супергероев */


const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        key={product.id}
      />
    )
  ) : (
    <em></em>
  )

  return (

    <div>
      <h3>Список выбранных супергероев</h3>
      
      <div>{nodes}</div>
      

      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}



Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
