import { CategoryList } from '../components/CategoryList';
import { Navbar } from '../components/Navbar';
import { ProductList } from '../components/ProductList';
import { OrderPanel } from '../components/OrderPanel';
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

  const handleRemoveCart = (productId) => {
    setCart((previousCart) => {
      return previousCart.filter((item) => item.id !== productId)
    }) 
  }

  const handleUpdateQuantity = (productId, action) => {
    setCart((previousCart) =>
      previousCart.map((item) => {
        if (item.id === productId) {
          if (action === 'increase') {
            return { ...item, qty: item.qty + 1 }
          } else {
            return {
              ...item,
              qty: Math.max(1, item.qty - 1)
            }
          }
        }
        return item
      })
    )
  }
  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h1 style={{ margin: '20px' }}>Our Menu</h1>

      <CategoryList selectedCategory={selectedCategory} setSelectedCategory={(category) => setSelectedCategory(category.trim())} />

      <ProductList searchTerm={searchTerm} selectedCategory={selectedCategory} onAddCart={handleAddToCart} />

      <OrderPanel cart={cart} onUpdateQuantity={handleUpdateQuantity} onRemoveCart={handleRemoveCart} />
    </div>
  )
}
