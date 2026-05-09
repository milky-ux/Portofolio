import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const { toggle } = useTheme()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav>
      <a className="nav-logo" href="#">MaaL</a>

      <div className="nav-center">
        {[
          ['about',      'Tentang'],
          ['skills',     'Skill'],
          ['projects',   'Proyek'],
          ['experience', 'Karir'],
          ['contact',    'Kontak'],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>
            {label}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <div className="availability">
          <span className="dot-live" />Open to work
        </div>
        <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
          ◐
        </button>
      </div>
    </nav>
  )
}