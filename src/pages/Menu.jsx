import { CategoryList } from '../components/CategoryList';
import { Navbar } from '../components/Navbar';
import { ProductList } from '../components/ProductList';
import { useState } from 'react';

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      )

      const updatedCart = existingProduct
        ? previousCart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...previousCart, { ...product, qty: 1 }]

      console.log('existingProduct:', existingProduct)
      
      

      return updatedCart
    })
  }
return (
  <div>
    <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    <h1 style={{ margin: '20px' }}>Our Menu</h1>

    <CategoryList selectedCategory={selectedCategory} setSelectedCategory={(category) => setSelectedCategory(category.trim())} />

    <ProductList searchTerm={searchTerm} selectedCategory={selectedCategory} onAddCart={handleAddToCart} />
  </div>
)
}
