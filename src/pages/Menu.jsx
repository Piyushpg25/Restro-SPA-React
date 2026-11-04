import { CategoryList } from '../components/CategoryList';
import { Navbar } from '../components/Navbar';
import { ProductList } from '../components/ProductList';
import { OrderPanel } from '../components/OrderPanel';
import { useState } from 'react';

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState([])
  const [orderType, setOrderType] = useState("Dine In")
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [tableNumber, setTableNumber] = useState("")

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

  const handleClearCart = () => {
    setCart([])
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
    <div className="menu-layout">
      <div className="menu-main">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="customer-info">
          <input type="text" placeholder='Enter customer name' name='name' value={customerName} onChange={(e) => setCustomerName(e.target.value)} />

          <input type="tel" placeholder='Enter Phone Number' name='phone' value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />

          {orderType === "Dine In" && <input type="text" placeholder='Enter Table Number' value={tableNumber} name='table' onChange={(e) => setTableNumber(e.target.value)} />}
        </div>

        <div className="order-type-selector">
          <button className={orderType === 'Dine In' ? "active" : ""} onClick={() => setOrderType("Dine In")}>Dine In</button>
          <button className={orderType === 'Takeout' ? "active" : ""} onClick={() => {
            setOrderType("Takeout")
              setTableNumber("")
          }}>Takeout</button>
          <button className={orderType === 'Curbside' ? "active" : ""} onClick={() => {
            setOrderType("Curbside")
              setTableNumber("")
          }}>Curbside</button>
        </div>

        <h1>Our Menu</h1>

        <CategoryList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductList
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onAddCart={handleAddToCart}
        />
      </div>

      <OrderPanel
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveCart={handleRemoveCart}
        orderType={orderType}
        customerName={customerName}
        customerPhone={customerPhone}
        tableNumber={tableNumber}
        clearCart={handleClearCart}
      />
    </div>
  )
}
