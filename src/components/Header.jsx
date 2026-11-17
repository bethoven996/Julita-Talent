import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'nosotros', label: 'Sobre nosotros' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marca en el menú la sección que se está viendo
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__brand" onClick={close} aria-label="Julieta Talent, ir al inicio">
          <Logo />
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="nav-principal"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} strokeWidth={2} />
        </button>

        <nav id="nav-principal" aria-label="Principal" className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? 'nav__link--active' : ''}`}
              aria-current={active === l.id ? 'true' : undefined}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--green btn--sm nav__cta" onClick={close}>
            Hablemos <Icon name="arrow" size={18} strokeWidth={2} />
          </a>
        </nav>
      </div>
    </header>
  )
}
