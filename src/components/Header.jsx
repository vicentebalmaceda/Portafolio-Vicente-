import { useEffect, useState } from 'react'
import Icon from './Icon'

const nav = [
  { href: '#impacto', label: 'Impacto' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#metodo', label: 'Método' },
  { href: '#contacto', label: 'Contacto' }
]

export default function Header({ onHome }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    onHome?.()
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-navy/88 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="container-pro flex items-center justify-between py-4">
        <button onClick={() => handleNav('#inicio')} className="flex items-center gap-3 text-left" aria-label="Ir al inicio">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-sm font-black text-bluebrand shadow-blueglow">VB</span>
          <span className="leading-tight">
            <span className="block text-sm font-black text-white">Vicente Balmaceda</span>
            <span className="block text-xs font-semibold text-sky-100/70">HR-Tech MBA</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.08] p-1 backdrop-blur lg:flex">
          {nav.map((item) => (
            <button key={item.href} onClick={() => handleNav(item.href)} className="rounded-full px-4 py-2 text-sm font-bold text-white/72 transition hover:bg-white/12 hover:text-white">
              {item.label}
            </button>
          ))}
        </nav>

        <button onClick={() => handleNav('#proyectos')} className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black text-navy shadow-blueglow transition hover:-translate-y-0.5 hover:bg-sky-100 lg:inline-flex">
          Ver casos
        </button>

        <button onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white lg:hidden" aria-label="Abrir menú">
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {nav.map((item) => (
              <button key={item.href} onClick={() => handleNav(item.href)} className="rounded-2xl px-4 py-3 text-left text-sm font-bold text-white/85 hover:bg-white/10">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
