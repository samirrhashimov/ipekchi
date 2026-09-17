import Container from "./Container"

const Footer = () => {
  return (
    <footer className="border-t border-[#deded8] py-[26px]">
      <Container className="flex flex-col items-start gap-[9px] sm:flex-row sm:items-center sm:justify-between">
        <span className="font-['Manrope'] text-[14px] font-extrabold tracking-[.08em]">Ipekchi</span>
        <small className="text-[11px] text-[#7f817a]">100% İpəkdən hazırlanmış yerli məhsullar.</small>
      </Container>
    </footer>
  )
}

export default Footer
