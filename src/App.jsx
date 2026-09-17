import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Catalog from "./components/Catalog"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-w-[320px] overflow-hidden bg-[#f4f3ef] text-[#1a1b19]" id="top">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
      </main>
      <Footer />
    </div>
  )
}

export default App
