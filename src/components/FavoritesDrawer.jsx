import { FaHeart, FaShoppingBag, FaTimes, FaTrash } from "react-icons/fa"

const FavoritesDrawer = ({ items, onClose, onRemove, onAddToCart }) => {
  return (
    <>
      <button className="fixed inset-0 z-[100] cursor-default bg-[#1a1b19]/30" type="button" aria-label="Seçilmişləri bağla" onClick={onClose} />
      <aside className="fixed right-0 top-0 z-[110] flex h-full w-full max-w-[390px] flex-col bg-[#f4f3ef] p-5 shadow-2xl sm:p-7" aria-label="Seçilmiş məhsullar">
        <div className="flex items-center justify-between border-b border-[#deded8] pb-5">
          <div>
            <h2 className="m-0 mt-2 font-['Manrope'] text-2xl font-semibold tracking-[-.05em]">Seçilmişlər <span className="text-sm font-normal text-[#92938d]">({items.length})</span></h2>
          </div>
          <button className="border-0 bg-transparent p-2 text-[#1a1b19]" type="button" aria-label="Seçilmişləri bağla" onClick={onClose}><FaTimes /></button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <FaHeart className="text-2xl text-[#6d9f68]" />
            <p className="m-0 mt-4 font-['Manrope'] text-lg font-semibold">Seçilmiş məhsul yoxdur.</p>
            <p className="mt-2 text-sm text-[#74756f]">Bəyəndiyin məhsulları ürək ikonuna klikləyərək saxla.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-5">
            {items.map((item) => (
              <div className="flex gap-3 border-b border-[#deded8] py-4 first:pt-0" key={item.id}>
                <div className="h-24 w-20 shrink-0 bg-[#e8e8e4] p-2"><img className="h-full w-full object-contain mix-blend-multiply" src={item.image} alt={item.title} /></div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2"><h3 className="m-0 line-clamp-2 text-sm font-semibold leading-snug">{item.title}</h3><button className="shrink-0 border-0 bg-transparent p-1 text-[#92938d] hover:text-[#b45c54]" type="button" aria-label={`${item.title} seçilmişlərdən sil`} onClick={() => onRemove(item.id)}><FaTrash className="text-[11px]" /></button></div>
                  <p className="mt-2 text-sm font-bold">${item.price.toFixed(2)}</p>
                  <button className="mt-3 flex items-center gap-2 border-0 bg-[#1a1b19] px-3 py-2 text-[11px] text-white" type="button" onClick={() => onAddToCart(item)}><FaShoppingBag className="text-[10px]" /> Səbətə əlavə et</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>
    </>
  )
}

export default FavoritesDrawer
