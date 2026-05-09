import { useState } from 'react'

const links = [
  { label: 'malikragilsyaputra385.com',  href: 'mailto:malikragilsyaputra385.com' },
  { label: 'LinkedIn',          href: 'https://linkedin.com/in/aryamahendra', external: true },
  { label: 'GitHub',            href: 'https://github.com/aryamahendra',      external: true },
  { label: '+62 896-6854-0337', href: 'tel:+6289668540337' },
]

// Pakai env variable supaya bisa beda antara dev dan production
const API_BASE = import.meta.env.VITE_API_URL || ''

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' })
  const [status, setStatus]   = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async () => {
    setStatus(null)
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', msg: 'Mohon isi semua field.' })
      return
    }
    setLoading(true)
    try {
      const res  = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ type: 'success', msg: data.message })
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', msg: data.error || 'Terjadi kesalahan.' })
      }
    } catch {
      setStatus({ type: 'error', msg: 'Tidak bisa terhubung ke server.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-split">
          <div className="r">
            <h2>Mari<br /><em>ngobrol</em><br />dulu.</h2>
            <div className="contact-links-list">
              {links.map(l => (
                <a
                  key={l.label}
                  className="clink"
                  href={l.href}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {l.label}
                  <span className="clink-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form r s2">
            <div className="field">
              <label htmlFor="c-name">Nama</label>
              <input id="c-name" name="name" type="text" placeholder="John Doe"
                value={form.name} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" placeholder="john@email.com"
                value={form.email} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="c-msg">Pesan</label>
              <textarea id="c-msg" name="message" placeholder="Halo, saya tertarik untuk..."
                value={form.message} onChange={handleChange} />
            </div>
            {status && <p className={`form-msg ${status.type}`}>{status.msg}</p>}
            <button className="send-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Mengirim...' : 'Kirim pesan →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}