import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    num: '01', domain: 'web', domainLabel: 'Web',
    title: 'Platform E-Commerce UMKM',
    desc: 'Aplikasi full-stack untuk UMKM lokal — dashboard admin, manajemen inventori real-time, dan sistem pembayaran terintegrasi.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Midtrans'],
    status: 'live', url: '#',
  },
  {
    num: '02', domain: 'web', domainLabel: 'Web',
    title: 'Sistem Manajemen Klinik',
    desc: 'Manajemen pasien, jadwal dokter, dan rekam medis digital. Hemat waktu administrasi hingga 60% dibanding sistem manual.',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
    status: 'live', url: '#',
  },
  {
    num: '03', domain: 'web', domainLabel: 'Web',
    title: 'Dashboard Analitik Real-time',
    desc: 'Visualisasi data bisnis dengan grafik dinamis, filter kustom, dan laporan otomatis terjadwal.',
    stack: ['React', 'WebSocket', 'Chart.js', 'Express'],
    status: 'wip', url: '#',
  },
  {
    num: '04', domain: 'mobile', domainLabel: 'Mobile',
    title: 'Aplikasi Manajemen Keuangan',
    desc: 'Aplikasi mobile cross-platform untuk pencatatan keuangan harian, laporan bulanan, dan pengingat tagihan otomatis.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Hive'],
    status: 'live', url: '#',
  },
  {
    num: '05', domain: 'mobile', domainLabel: 'Mobile',
    title: 'Food Delivery App',
    desc: 'Aplikasi pemesanan makanan dengan fitur real-time tracking, ulasan, dan rekomendasi berbasis riwayat order.',
    stack: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    status: 'wip', url: '#',
  },
  {
    num: '06', domain: 'game', domainLabel: 'Game',
    title: '2D Platformer — "Rimba Run"',
    desc: 'Game platformer 2D bertema hutan tropis Indonesia. Dibuat solo dengan Unity — termasuk semua asset, audio, dan level design.',
    stack: ['Unity', 'C#', 'Aseprite', 'FMOD'],
    status: 'live', url: '#',
  },
  {
    num: '07', domain: 'game', domainLabel: 'Game',
    title: 'Puzzle RPG — "Warung Quest"',
    desc: 'Game RPG ringan berbasis puzzle dengan setting warung makan khas Indonesia. Prototipe untuk game jam lokal.',
    stack: ['Godot', 'GDScript', 'Aseprite'],
    status: 'wip', url: '#',
  },
]

export default function Projects({ filter }) {
  // Re-run reveal setiap filter berubah
  useScrollReveal([filter])

  const visible = filter === 'all'
    ? projects
    : projects.filter(p => p.domain === filter)

  return (
    <section id="projects">
      <div className="container">
        <div className="sec-label r">Portofolio</div>
        <div className="sec-title r s1">Proyek<br />Pilihan</div>
        <div className="proj-grid">
          {visible.map((p, i) => (
            <a
              key={p.num}
              className={`proj-item r s${(i % 5) + 1}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="proj-num">{p.num}</div>
              <div className="proj-info">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-sub">{p.desc}</p>
                <div className="proj-stack">
                  {p.stack.map(s => <span className="ps" key={s}>{s}</span>)}
                </div>
              </div>
              <div className="proj-right">
                <span className="proj-domain-badge">{p.domainLabel}</span>
                <span className={`pbadge ${p.status === 'live' ? 'pb-live' : 'pb-wip'}`}>
                  {p.status}
                </span>
                <span className="proj-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}