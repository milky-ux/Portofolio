const stats = [
  { val: '3',   key: 'Domain yang dikuasai' },
  { val: '15+', key: 'Proyek selesai' },
  { val: '8+',  key: 'Klien dari berbagai industri' },
  { val: '2+',  key: 'Tahun pengalaman profesional' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="sec-label r">Tentang</div>
            <div className="sec-title r s1">Siapa<br />Saya?</div>
            <p className="r s2">
              Saya seorang <strong>software developer</strong> yang bekerja
              di tiga domain — web, mobile, dan game. Bukan karena ingin
              terlihat serba bisa, tapi karena tiap domain mengajarkan
              cara berpikir yang berbeda.
            </p>
            <p className="r s3">
              Di <strong>web</strong>, saya fokus pada arsitektur yang bersih
              dan performa. Di <strong>mobile</strong>, saya peduli pada
              pengalaman native yang terasa natural. Di <strong>game</strong>,
              saya belajar tentang sistem, logika, dan feedback loop.
            </p>
            <p className="r s4">
              Berbasis di Semarang. Terbuka untuk remote dan kolaborasi lintas kota.
            </p>
            <a className="cv-btn r s5" href="CV-Arya-Mahendra.pdf" download>
              <svg viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          <div className="about-right r s2">
            {stats.map(s => (
              <div className="stat-row" key={s.key}>
                <span className="stat-val">{s.val}</span>
                <span className="stat-key">{s.key}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}