import Icon from './Icon.jsx'
import Logo, { Sparkle } from './Logo.jsx'
import { site, audiences, reasons } from '../data.js'

// Título centrado con líneas doradas a los costados
export function LinedTitle({ children, id }) {
  return (
    <div className="lined">
      <span className="lined__line" aria-hidden="true" />
      <h2 id={id}>{children}</h2>
      <span className="lined__line" aria-hidden="true" />
    </div>
  )
}

export function Help({ onPick }) {
  return (
    <section className="section section--tight" aria-labelledby="ayuda-title">
      <div className="container">
        <LinedTitle id="ayuda-title">¿Cómo podemos ayudarte?</LinedTitle>
        <div className="help">
          {Object.entries(audiences).map(([key, a]) => (
            <article key={key} className={`help__card help__card--${key}`}>
              <span className="help__icon"><Icon name={a.icon} size={40} strokeWidth={1.3} /></span>
              <div className="help__body">
                <h3>{a.label}</h3>
                <p>{a.intro}</p>
                <a href="#servicios" className="link-arrow" onClick={() => onPick(key)}>
                  Conocé más <Icon name="arrow" size={16} strokeWidth={2} />
                </a>
              </div>
              <span className="help__arc" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AudienceTabs({ audience, setAudience, idPrefix }) {
  return (
    <div className="tabs" role="tablist" aria-label="Elegí tu perfil">
      {Object.entries(audiences).map(([key, a]) => (
        <button
          key={key}
          type="button"
          role="tab"
          id={`${idPrefix}-tab-${key}`}
          aria-selected={audience === key}
          aria-controls={`${idPrefix}-panel`}
          className={`tab ${audience === key ? 'tab--active' : ''}`}
          onClick={() => setAudience(key)}
        >
          {a.tab}
        </button>
      ))}
    </div>
  )
}

export function Services({ audience, setAudience }) {
  const a = audiences[audience]
  return (
    <section id="servicios" className="section services" aria-labelledby="servicios-title">
      <div className="container">
        <LinedTitle id="servicios-title">Nuestros servicios</LinedTitle>
        <div className="services__bar">
          <AudienceTabs audience={audience} setAudience={setAudience} idPrefix="srv" />
          <p className="muted">{a.intro}</p>
        </div>
        <div id="srv-panel" role="tabpanel" aria-labelledby={`srv-tab-${audience}`} className="services__grid" key={audience}>
          {a.services.map((s) => (
            <article key={s.title} className={`service fade-in service--${audience}`}>
              <span className="service__icon"><Icon name={s.icon} size={26} /></span>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section className="section section--tight" aria-labelledby="why-title">
      <div className="container">
        <LinedTitle id="why-title">¿Por qué elegirnos?</LinedTitle>
        <ul className="why">
          {reasons.map((r) => (
            <li key={r.title} className="why__item">
              <span className="why__icon"><Icon name={r.icon} size={34} strokeWidth={1.4} /></span>
              <span>{r.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="nosotros" className="section about-wrap" aria-labelledby="nosotros-title">
      <span className="blob blob--about" aria-hidden="true" />
      <div className="container about">
        <div className="about__photo">
          {site.aboutImage ? <img src={site.aboutImage} alt={`Foto de ${site.fullName}`} /> : <span>[Foto]</span>}
          <Sparkle className="about__spark" />
        </div>
        <div className="about__copy">
          <span className="eyebrow">Sobre nosotros</span>
          <h2 id="nosotros-title">
            Personas que conectan <em>con personas.</em>
          </h2>
          <span className="rule" aria-hidden="true" />
          <p>
            Julieta Talent es una consultora de Recursos Humanos que acompaña a empresas en la búsqueda
            del talento indicado y a personas en cada paso de su desarrollo profesional.
          </p>
          <p>
            Detrás de la consultora está {site.fullName}, estudiante de {site.career} en {site.institution}.
            Trabajamos de forma cercana y a medida, entendiendo cada búsqueda y cada historia laboral como única.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Banner() {
  return (
    <section className="section section--tight" aria-label="Trabajemos juntos">
      <div className="container">
        <div className="banner">
          <span className="banner__circle" aria-hidden="true" />
          <span className="banner__deco" aria-hidden="true"><span className="banner__arch" /></span>
          <p className="banner__text">
            Talento que impulsa.
            <em>Oportunidades que inspiran.</em>
          </p>
          <span className="banner__divider" aria-hidden="true" />
          <a href="#contacto" className="btn btn--pink">
            Trabajemos juntos <Icon name="arrow" size={18} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const socials = [
    { icon: 'linkedin', label: 'LinkedIn', href: site.linkedin },
    { icon: 'instagram', label: 'Instagram', href: `https://instagram.com/${site.instagram}` },
    { icon: 'mail', label: 'Email', href: `mailto:${site.email}` },
  ]
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo showDescriptor />
        <div className="footer__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <Icon name={s.icon} size={24} strokeWidth={1.8} />
            </a>
          ))}
        </div>
        <span className="footer__divider" aria-hidden="true" />
        <p className="footer__motto">Talento · Conexión · Crecimiento</p>
      </div>
      <div className="container footer__legal">
        <span>© {new Date().getFullYear()} Julieta Talent</span>
        <span>Sitio hecho por <a href="#inicio">Web Service</a></span>
      </div>
      <svg className="footer__waves" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 90C220 40 420 140 720 100s520-90 720-40v100H0z" fill="#EBD5C2" />
        <path d="M760 160c140-70 330-110 680-70v70z" fill="#9AA391" />
        <path d="M0 120c260-30 520 30 820 10 220-14 420-40 620-20v50H0z" fill="#F3E2D3" />
      </svg>
    </footer>
  )
}
