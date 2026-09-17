import { useState } from "react"
import { FaCheck, FaHeart, FaShoppingBag, FaStar } from "react-icons/fa"

const categoryLabels = {
  "men's clothing": "Kişi",
  "women's clothing": "Qadın",
  jewelery: "Zinət əşyaları",
}

const ProductCard = ({ product, onAddToCart }) => {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1200)
  }

  return (
    <article className="group min-w-0">
      <div className="relative h-[220px] overflow-hidden bg-[#e8e8e4] min-[641px]:h-[300px] min-[901px]:h-[370px]">
        <span className="absolute left-[13px] top-[13px] z-[1] bg-[#f4f3ef] px-[9px] py-[7px] text-[9px] uppercase tracking-[.08em] text-[#666963]">{categoryLabels[product.category]}</span>
        <button className="absolute right-[13px] top-[13px] z-[1] border-0 bg-transparent p-[5px] text-[13px] text-[#1a1b19] transition-colors hover:text-[#b45c54]" type="button" aria-label={`${product.title} favoritlərə əlavə et`}>
          <FaHeart />
        </button>
        <img className="h-full w-full object-contain p-[19px] mix-blend-multiply transition-transform duration-500 group-hover:scale-105 min-[641px]:p-8" src={product.image} alt={product.title} />
        <button className={`absolute bottom-0 left-0 flex w-full translate-y-0 items-center justify-center gap-2 border-0 p-[15px] text-[12px] text-white transition-all duration-300 min-[641px]:translate-y-full min-[641px]:opacity-0 min-[641px]:group-hover:translate-y-0 min-[641px]:group-hover:opacity-100 ${isAdded ? "bg-[#6d9f68] animate-pulse" : "bg-[#1a1b19]"}`} type="button" onClick={handleAddToCart} aria-label={isAdded ? `${product.title} səbətə əlavə olundu` : `${product.title} səbətə əlavə et`}>
          {isAdded ? <FaCheck className="animate-bounce" /> : <FaShoppingBag />}
          {isAdded ? "Əlavə olundu" : "Səbətə əlavə et"}
        </button>
      </div>
      <div className="pt-4">
        <div className="flex items-center gap-[7px] text-[11px] text-[#81837d]">
          <span className="flex items-center gap-1 text-[#b08345]"><FaStar className="text-[9px]" /> {product.rating.rate}</span>
          <small className="text-[10px] text-[#a0a19b]">({product.rating.count})</small>
        </div>
        <h3 className="m-0 mt-[9px] min-h-[38px] font-['Manrope'] text-[12px] font-semibold leading-[1.35] sm:text-[14px]">{product.title}</h3>
        <p className="m-0 mt-[10px] text-[14px] font-bold">${product.price.toFixed(2)}</p>
      </div>
    </article>
  )
}

export default ProductCard
