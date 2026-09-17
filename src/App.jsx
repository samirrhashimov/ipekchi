import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Catalog from "./components/Catalog"
import Footer from "./components/Footer"

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      if (existingItem) {
        return currentItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const changeQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }
    setCartItems((currentItems) => currentItems.map((item) => item.id === productId ? { ...item, quantity } : item))
  }

  return (
    <div className="min-w-[320px] overflow-hidden bg-[#f4f3ef] text-[#1a1b19]" id="top">
      <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} cartItems={cartItems} onRemoveFromCart={removeFromCart} onChangeQuantity={changeQuantity} />
      <main>
        <Hero />
        <Catalog searchQuery={searchQuery} onAddToCart={addToCart} />
      </main>
      <Footer />
    </div>
  )
}

export default App
