const Main = () => (
  <main className="flex justify-center pb-10">
    <div className="flex flex-col md:max-w-5xl md:flex-row-reverse md:gap-10 md:p-10">
      <picture>
        <img src="./images/image-hero-mobile.png" alt="hero" className="md:hidden" />
        <img src="./images/image-hero-desktop.png" alt="hero" className="hidden md:block" />
      </picture>
      <div className="mt-5 flex flex-col items-center gap-5 p-5 text-center md:items-start md:gap-0 md:space-y-10 md:self-end md:pb-0 md:text-left">
        <h1 className="text-3xl font-bold md:text-6xl lg:pr-16">Make remote Work</h1>
        <p className="text-secondary lg:pr-14 ">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button type="button" className="my-3 rounded-xl border bg-primary px-5 py-3 text-sm font-bold text-white duration-150 hover:bg-transparent hover:text-primary md:border-primary">Learn more</button>
        <div className="flex gap-5 pt-5 md:w-5/6 md:pt-16">
          <picture><img src="./images/client-databiz.svg" alt="client databiz" /></picture>
          <picture><img src="./images/client-audiophile.svg" alt="client audiophile" /></picture>
          <picture><img src="./images/client-meet.svg" alt="client meet" /></picture>
          <picture><img src="./images/client-maker.svg" alt="client maker" /></picture>
        </div>
      </div>
    </div>
  </main>
)

export default Main
