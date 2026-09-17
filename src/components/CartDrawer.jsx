import { FaMinus, FaPlus, FaTrash, FaTimes } from "react-icons/fa"

const CartDrawer = ({ items, onClose, onRemove, onChangeQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <button className="fixed inset-0 z-[100] cursor-default bg-[#1a1b19]/30" type="button" aria-label="Səbəti bağla" onClick={onClose} />
      <aside className="fixed right-0 top-0 z-[110] flex h-full w-full max-w-[390px] flex-col bg-[#f4f3ef] p-5 shadow-2xl sm:p-7" aria-label="Səbət">
        <div className="flex items-center justify-between border-b border-[#deded8] pb-5">
          <div>
            <p className="m-0 text-[10px] font-bold tracking-[.18em] text-[#71736e]">SEÇİMLƏRİN</p>
            <h2 className="m-0 mt-2 font-['Manrope'] text-2xl font-semibold tracking-[-.05em]">Səbət <span className="text-sm font-normal text-[#92938d]">({items.length})</span></h2>
          </div>
          <button className="border-0 bg-transparent p-2 text-[#1a1b19]" type="button" aria-label="Səbəti bağla" onClick={onClose}><FaTimes /></button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="m-0 font-['Manrope'] text-lg font-semibold">Səbətin hələ boşdur.</p>
            <p className="mt-2 text-sm text-[#74756f]">Bəyəndiyin məhsulları buradan əlavə edə bilərsən.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-5">
              {items.map((item) => (
                <div className="flex gap-3 border-b border-[#deded8] py-4 first:pt-0" key={item.id}>
                  <div className="h-24 w-20 shrink-0 bg-[#e8e8e4] p-2"><img className="h-full w-full object-contain mix-blend-multiply" src={item.image} alt={item.title} /></div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2"><h3 className="m-0 line-clamp-2 text-sm font-semibold leading-snug">{item.title}</h3><button className="shrink-0 border-0 bg-transparent p-1 text-[#92938d] hover:text-[#b45c54]" type="button" aria-label={`${item.title} sil`} onClick={() => onRemove(item.id)}><FaTrash className="text-[11px]" /></button></div>
                    <p className="mt-2 text-sm font-bold">${item.price.toFixed(2)}</p>
                    <div className="mt-3 flex w-fit items-center border border-[#cbcfc5]">
                      <button className="border-0 bg-transparent px-2 py-1 text-[10px]" type="button" aria-label="Miqdarı azalt" onClick={() => onChangeQuantity(item.id, item.quantity - 1)}><FaMinus /></button>
                      <span className="min-w-7 text-center text-xs">{item.quantity}</span>
                      <button className="border-0 bg-transparent px-2 py-1 text-[10px]" type="button" aria-label="Miqdarı artır" onClick={() => onChangeQuantity(item.id, item.quantity + 1)}><FaPlus /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#deded8] pt-5">
              <div className="flex items-center justify-between"><span className="text-sm text-[#74756f]">Cəmi</span><strong className="font-['Manrope'] text-xl">${total.toFixed(2)}</strong></div>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
