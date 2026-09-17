import { useMemo, useState } from "react"
import { FaArrowRight, FaFilter } from "react-icons/fa"
import Container from "./Container"
import ProductCard from "./ProductCard"
import products from "../products.json"

const categories = ["Hamısı", "Qadın", "Kişi", "Zinət əşyaları"]

const categoryLabels = {
  "men's clothing": "Kişi",
  "women's clothing": "Qadın",
  jewelery: "Zinət əşyaları",
}

const Catalog = ({ searchQuery, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState("Hamısı")

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = activeCategory === "Hamısı" || categoryLabels[product.category] === activeCategory
      const searchableText = `${product.title} ${product.description} ${categoryLabels[product.category]}`.toLowerCase()
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery))
    })
  }, [activeCategory, searchQuery])

  return (
    <section className="px-0 pb-[72px] pt-[52px] sm:pb-[100px] sm:pt-[72px]" id="catalog">
      <Container>
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-[17px] text-[10px] font-bold tracking-[.18em] text-[#71736e]">MƏHSULLAR</p>
            <h2 className="m-0 font-['Manrope'] text-[25px] font-semibold tracking-[-.05em] sm:text-[30px]">Yeni gələnlər <span className="align-top text-[14px] font-normal tracking-normal text-[#92938d]">({filteredProducts.length})</span></h2>
          </div>
          <button className="flex items-center gap-[9px] border border-[#cbcfc5] bg-transparent px-4 py-[10px] text-[12px] text-[#555751]" type="button"><FaFilter className="text-[11px]" /> Filterlə</button>
        </div>

        <div className="mt-[34px] mb-8 flex gap-[27px] overflow-x-auto border-b border-[#dcded7]" role="tablist" aria-label="Məhsul kateqoriyaları">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? "whitespace-nowrap border-0 border-b-2 border-[#1a1b19] bg-transparent px-0 pb-[13px] text-[13px] font-bold text-[#1a1b19]" : "whitespace-nowrap border-0 border-b-2 border-transparent bg-transparent px-0 pb-[13px] text-[13px] text-[#8a8c86]"}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 min-[641px]:grid-cols-3 min-[901px]:grid-cols-4 min-[641px]:gap-x-[18px] min-[641px]:gap-y-[29px]">
          {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
        </div>

        {filteredProducts.length === 0 && <p className="py-16 text-center text-sm text-[#74756f]">Axtarışınıza uyğun məhsul tapılmadı.</p>}

        <button className="mx-auto mt-[66px] flex items-center gap-4 border border-[#c8cbc2] bg-transparent px-5 py-[14px] text-[12px]" type="button">Kataloqa bax <FaArrowRight className="text-[11px]" /></button>
      </Container>
    </section>
  )
}

export default Catalog
