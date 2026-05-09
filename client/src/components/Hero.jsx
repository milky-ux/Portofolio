export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-index">PORTFOLIO — 2026</div>
      <div className="hero-content">
        <div className="hero-eyebrow">
          Software Developer — Web, Mobile & Game
        </div>

        <h1 className="hero-name">
          Malik Ragil<br />
          <span className="dim">Syaputra</span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-desc">
            Saya membangun untuk web, mobile, dan game.
            Fokus pada produk yang solid secara teknis
            dan terasa menyenangkan digunakan.
          </p>
          <div className="hero-actions">
            <a
              className="btn-main"
              href="#projects"
              onClick={e => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Lihat Proyek →
            </a>
            <a className="btn-ghost" href="CV-MaaL.pdf" download>
              Download CV
            </a>
            <div className="hero-scroll">
              <div className="scroll-tick" />
              scroll
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}