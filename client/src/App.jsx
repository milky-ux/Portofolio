import { useEffect, useState } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

import Cursor       from './components/Cursor'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Marquee      from './components/Marquee'
import About        from './components/About'
import DomainFilter from './components/DomainFilter'
import Skills       from './components/Skills'
import Projects     from './components/Projects'
import Experience   from './components/Experience'
import Contact      from './components/Contact'

export default function App() {
  const [progress, setProgress] = useState(0)
  const [showBtt, setShowBtt]   = useState(false)
  const [domain, setDomain]     = useState('all')

  // Initial reveal (no deps = run once on mount)
  useScrollReveal([])

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - innerHeight) * 100
      setProgress(pct)
      setShowBtt(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Cursor />
      <div id="prog" style={{ width: progress + '%' }} />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />

        <div className="filter-anchor">
          <div className="container">
            <DomainFilter active={domain} onChange={setDomain} />
          </div>
        </div>

        <Skills filter={domain} />
        <Projects filter={domain} />
        <Experience />
        <Contact />
      </main>

      <footer>
        <span className="foot-logo">MaaL</span>
        <span className="foot-right">© 2026 · Yogyakarta</span>
      </footer>

      <button
        id="btt"
        className={showBtt ? 'show' : ''}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Ke atas"
      >
        ↑
      </button>
    </>
  )
}