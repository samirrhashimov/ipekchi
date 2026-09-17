import { useState } from "react"
import Container from "./Container"
import logo from "/logo/logo.svg"
import CartDrawer from "./CartDrawer"
import { FaSearch, FaShoppingBag, FaTimes } from "react-icons/fa"

const Navbar = ({ searchQuery, onSearch, cartItems, onRemoveFromCart, onChangeQuantity }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-30 border-b border-[#deded8] bg-[#f4f3ef]/95 shadow-sm backdrop-blur-sm">
        <Container>
          <div className="flex h-[72px] items-center justify-between sm:h-[88px]">
            <a href="#top" aria-label="İpekçi ana səhifə"><img className="block h-[34px] w-auto sm:h-[43px]" src={logo} alt="İpekçi" /></a>
            <nav className="hidden md:block" aria-label="Əsas naviqasiya">
              <ul className="m-0 flex list-none gap-4 p-0 lg:gap-[34px]">
                <li><a className="text-[14px] font-bold text-[#1a1b19] no-underline transition-colors hover:text-[#1a1b19]" href="#catalog">Kolleksiya</a></li>
                <li><a className="text-[14px] text-[#74756f] no-underline transition-colors hover:text-[#1a1b19]" href="#catalog">Qadın</a></li>
                <li><a className="text-[14px] text-[#74756f] no-underline transition-colors hover:text-[#1a1b19]" href="#catalog">Kişi</a></li>
                <li><a className="text-[14px] text-[#74756f] no-underline transition-colors hover:text-[#1a1b19]" href="#catalog">Aksesuar</a></li>
              </ul>
            </nav>
            <div className="flex items-center gap-[21px]">
              <button className="border-0 bg-transparent p-[5px] text-[#1a1b19]" type="button" aria-label="Axtarış aç" onClick={() => setIsSearchOpen((open) => !open)}>{isSearchOpen ? <FaTimes className="text-base" /> : <FaSearch className="text-base" />}</button>
              <button className="relative flex items-center gap-2 border-0 bg-transparent p-[5px] text-[#1a1b19]" type="button" aria-label="Səbəti aç" onClick={() => setIsCartOpen(true)}><FaShoppingBag className="text-base" />{cartCount > 0 && <span className="absolute -right-2 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#d8e24a] text-[10px]">{cartCount}</span>}</button>
            </div>
          </div>
          {isSearchOpen && <div className="border-t border-[#deded8] py-3"><div className="relative"><FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#92938d]" /><input className="w-full border border-[#cbcfc5] bg-transparent py-3 pl-9 pr-4 text-sm outline-none placeholder:text-[#92938d] focus:border-[#1a1b19]" type="search" value={searchQuery} onChange={(event) => onSearch(event.target.value)} placeholder="Məhsul axtar..." autoFocus /></div></div>}
        </Container>
        {isCartOpen && <CartDrawer items={cartItems} onClose={() => setIsCartOpen(false)} onRemove={onRemoveFromCart} onChangeQuantity={onChangeQuantity} />}
    </header>
  )
}

export default Navbar
