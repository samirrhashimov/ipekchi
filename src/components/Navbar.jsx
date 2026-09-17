import Container from "./Container"
import logo from "/logo/logo.svg"
import { FaSearch, FaShoppingBag } from "react-icons/fa"

const Navbar = () => {
  return (
    <header className="border-b border-[#deded8] bg-[#f4f3ef]">
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
              <button className="border-0 bg-transparent p-[5px] text-[#1a1b19]" type="button" aria-label="Axtar"><FaSearch className="text-base" /></button>
              <button className="flex items-center gap-2 border-0 bg-transparent p-[5px] text-[#1a1b19]" type="button" aria-label="Səbət"><FaShoppingBag className="text-base" /></button>
            </div>
          </div>
        </Container>
    </header>
  )
}

export default Navbar
