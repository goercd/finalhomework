import React from 'react'
import PropTypes from 'prop-types'
import products from '../reducers/products';


/* Шаблон для отображения супергероя в каталоге, в котором у меня не получилось вставить изображение... Так появилась кнопка Choose a hero вместо того, чтобы героя можно было выбрать щелкнув по картинке. */


const Product = ({ image, title }) => (
  <div>

<img src={products.json}/>

{title} 
  </div>
)





Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
