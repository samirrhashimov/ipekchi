import Container from "./Container"

const Hero = () => {
  return (
    <section className="relative min-h-[360px] overflow-hidden bg-[#E8E1CF] px-0 py-[60px] sm:min-h-[430px] sm:py-[79px]">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=85"
        alt="Zərif tekstil və moda kolleksiyası"
      />
      <div className="absolute inset-0 bg-[#f4f0e8]/55" aria-hidden="true" />
      <Container>
        <div className="relative z-10 flex min-h-[240px] items-end justify-between sm:min-h-[272px]">
          <div>
            <h1 className="m-0 max-w-[690px] font-['Manrope'] text-[2.65rem] font-medium leading-[.99] tracking-[-.06em] sm:text-[clamp(2.25rem,5vw,4.4rem)]">Gündəlik həyat üçün seçilmiş parçalar.</h1>
            <p className="mb-0 mt-6 text-[14px] text-[#666963]">Stilini tamamlayan, diqqətlə seçilmiş məhsulları kəşf et.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
