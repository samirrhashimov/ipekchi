import { useState } from "react"
import products from "./products.json"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Catalog from "./components/Catalog"
import Footer from "./components/Footer"

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [favoriteIds, setFavoriteIds] = useState([])

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

  const toggleFavorite = (productId) => {
    setFavoriteIds((currentIds) => currentIds.includes(productId)
      ? currentIds.filter((id) => id !== productId)
      : [...currentIds, productId])
  }

  const favoriteItems = products.filter((product) => favoriteIds.includes(product.id))

  return (
    <div className="min-w-[320px] overflow-x-clip bg-[#f4f3ef] text-[#1a1b19]" id="top">
      <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} cartItems={cartItems} onRemoveFromCart={removeFromCart} onChangeQuantity={changeQuantity} favoriteItems={favoriteItems} onRemoveFavorite={toggleFavorite} onAddToCart={addToCart} />
      <main>
        <Hero />
        <Catalog searchQuery={searchQuery} onAddToCart={addToCart} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
      </main>
      <Footer />
    </div>
  )
}

export default App
