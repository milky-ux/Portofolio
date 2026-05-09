import { useEffect } from 'react'

export function useScrollReveal(deps = []) {
  useEffect(() => {
    // Kumpulkan semua elemen .r
    const elements = Array.from(document.querySelectorAll('.r'))

    // Strip .in dari elemen yang belum pernah terlihat
    // (elemen baru hasil filter tidak punya .in sama sekali)
    // Elemen yang sudah .in dibiarkan — tidak di-reset supaya tidak flicker
    elements.forEach(el => {
      if (!el.classList.contains('in')) {
        // Paksa reflow supaya transisi bisa jalan ulang
        el.style.transition = 'none'
        void el.offsetHeight
        el.style.transition = ''
      }
    })

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )

    elements.forEach(el => {
      if (!el.classList.contains('in')) {
        // Kalau sudah dalam viewport sekarang, langsung tampilkan
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in')
        } else {
          obs.observe(el)
        }
      }
    })

    return () => obs.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}