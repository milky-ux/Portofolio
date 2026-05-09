require('dotenv').config()
const express = require('express')
const cors    = require('cors')

const app  = express()
const PORT = process.env.PORT || 5000

// ── MIDDLEWARE ──
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}))
app.use(express.json())

// ── ROUTES ──
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API berjalan.' })
})

// Tambah async di sini ↓
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Semua field wajib diisi.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Format email tidak valid.' })
  }

  console.log(`📩 Pesan dari ${name} <${email}>: ${message}`)

  // Uncomment kalau mau kirim email asli:
  try {
    const nodemailer   = require('nodemailer')
    const transporter  = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `[Portfolio] Pesan dari ${name}`,
      text: message,
    })
  } catch (err) {
    console.error('Gagal kirim email:', err)
    return res.status(500).json({ success: false, error: 'Gagal mengirim pesan.' })
  }


  return res.json({
    success: true,
    message: `Terima kasih ${name}, pesan kamu sudah diterima!`,
  })
})

// ── START ──
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`)
})