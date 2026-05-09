# Portfolio — MaaL
React + Vite (frontend) · Node.js + Express (backend)

---

## Struktur Project

```
portfolio/
├── .gitignore
├── vercel.json          ← konfigurasi Vercel
├── client/              ← React + Vite
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── styles/global.css
│       ├── hooks/
│       │   ├── useTheme.js
│       │   └── useScrollReveal.js
│       └── components/
│           ├── Cursor.jsx
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── Marquee.jsx
│           ├── About.jsx
│           ├── DomainFilter.jsx
│           ├── Skills.jsx
│           ├── Projects.jsx
│           ├── Experience.jsx
│           └── Contact.jsx
└── server/              ← Node.js + Express
    ├── index.js
    ├── package.json
    ├── railway.json     ← konfigurasi Railway
    └── .env.example     ← template environment variables
```

---

## Jalankan Lokal

```bash
# Terminal 1 — backend
cd server
npm install
npm run dev        # jalan di http://localhost:5000

# Terminal 2 — frontend
cd client
npm install
npm run dev        # jalan di http://localhost:5173
```

---

## Deploy ke Vercel (Frontend)

1. Push repo ke GitHub
2. Buka vercel.com → Add New Project → pilih repo
3. Set konfigurasi:

   | Setting          | Value        |
   |------------------|--------------|
   | Root Directory   | `client`     |
   | Framework        | Vite         |
   | Build Command    | `npm run build` |
   | Output Directory | `dist`       |

4. Tambah Environment Variable di Vercel:

   ```
   VITE_API_URL = https://nama-app-kamu.up.railway.app
   ```
   (isi setelah backend Railway sudah live)

5. Klik Deploy.

---

## Deploy ke Railway (Backend)

1. Buka railway.app → New Project → Deploy from GitHub
2. Pilih repo yang sama → set Root Directory ke `server`
3. Tambah Environment Variables di Railway:

   ```
   PORT        = 5000
   CLIENT_URL  = https://nama-project-kamu.vercel.app
   ```

   (opsional, untuk kirim email):
   ```
   EMAIL_USER  = emailkamu@gmail.com
   EMAIL_PASS  = app_password_gmail
   ```

4. Railway otomatis deploy. Copy URL yang dikasih Railway.
5. Paste URL itu ke `VITE_API_URL` di Vercel (langkah 4 di atas).
6. Redeploy Vercel — selesai.

---

## Update Konten Portfolio

Semua konten ada di file komponen, tinggal edit dan push:

| Yang ingin diubah         | File                                     |
|---------------------------|------------------------------------------|
| Nama, bio, headline       | `client/src/components/Hero.jsx`         |
| Tentang saya              | `client/src/components/About.jsx`        |
| Daftar proyek             | `client/src/components/Projects.jsx`     |
| Skill & tech stack        | `client/src/components/Skills.jsx`       |
| Pengalaman kerja          | `client/src/components/Experience.jsx`   |
| Link & info kontak        | `client/src/components/Contact.jsx`      |
| Warna, font, spacing      | `client/src/styles/global.css`           |

Setelah edit:
```bash
git add .
git commit -m "update konten"
git push
```
Vercel otomatis rebuild dalam 1-2 menit.

---

## Aktifkan Email di Form Kontak (Opsional)

1. Di Google Account → Security → App Passwords → buat password baru
2. Isi `.env` di server:
   ```
   EMAIL_USER=emailkamu@gmail.com
   EMAIL_PASS=xxxx_xxxx_xxxx_xxxx
   ```
3. Di `server/index.js`, uncomment blok nodemailer.
4. Install dotenv sudah otomatis ter-include.