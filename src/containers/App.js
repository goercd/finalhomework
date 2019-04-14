import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

/* здесь можно было бы добавить больше стилей, но лучше бы у меня получилось вывести картинки, поиск и фильтры */

const App = () => (
<div style={{ backgroundColor: "#2B2D35",
  width: "202px", 
  padding: "16px", textAlign: "center", color: "white" 
  }}>
       
        
    <hr/>
    <CartContainer />
    <hr/>
    <ProductsContainer />
    
  </div>
)






export default App
