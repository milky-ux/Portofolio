import { useState } from 'react'

const experiences = [
  {
    period: '2023 — Sekarang',
    role: 'Junior Software Developer',
    company: 'PT. Maju Bersama Digital · Full-time',
    desc: 'Mengembangkan aplikasi web internal skala menengah dan berkontribusi pada proyek mobile pertama perusahaan menggunakan Flutter. Berkolaborasi lintas tim dalam siklus agile, dari perencanaan sprint hingga deployment.',
    tags: ['React.js', 'Node.js', 'Flutter', 'PostgreSQL'],
  },
  {
    period: '2022 — 2023',
    role: 'Frontend & Mobile Developer',
    company: 'CV. Kreatif Studio · Freelance',
    desc: 'Membangun website dan aplikasi mobile untuk klien UMKM di Jawa Tengah. Beberapa proyek mencakup pengembangan game kasual ringan sebagai fitur interaktif di dalam aplikasi.',
    tags: ['Next.js', 'React Native', 'Unity', 'Tailwind'],
  },
  {
    period: '2022',
    role: 'Web Developer Intern',
    company: 'Dinas Kominfo Kota Semarang · Magang',
    desc: 'Membantu pengembangan portal informasi publik berbasis Laravel. Sambil magang, mengembangkan game edukasi kecil dengan Godot sebagai proyek sampingan untuk komunitas lokal.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Godot'],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section id="experience">
      <div className="container">
        <div className="sec-label r">Karir</div>
        <div className="sec-title r s1">Pengalaman<br />Kerja</div>
        <div className="exp-grid">
          <div className="exp-timeline r s1">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`exp-yr${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                {exp.period}
              </div>
            ))}
          </div>
          <div className="exp-content r s2">
            <div className="exp-card">
              <div className="exp-role">{experiences[active].role}</div>
              <div className="exp-company">{experiences[active].company}</div>
              <p className="exp-desc">{experiences[active].desc}</p>
              <div className="exp-tags">
                {experiences[active].tags.map(t => (
                  <span className="exp-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}