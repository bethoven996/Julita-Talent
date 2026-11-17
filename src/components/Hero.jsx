import Icon from './Icon.jsx'
import { site } from '../data.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <span className="blob blob--hero-tan" aria-hidden="true" />
      <span className="blob blob--hero-sand" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>
            El talento transforma.
            <span className="hero__sub">
              Las oportunidades <em>conectan.</em>
            </span>
          </h1>
          <span className="rule" aria-hidden="true" />
          <p className="hero__lead">
            Conectamos talentos con oportunidades
            <br className="br-desk" /> y empresas con talento.
          </p>
          <a href="#servicios" className="btn btn--green">
            Conocé nuestros servicios <Icon name="arrow" size={18} strokeWidth={2} />
          </a>
        </div>

        <div className="hero__media">
          <span className="blob blob--hero-pink" aria-hidden="true" />
          <span className="blob blob--hero-gold" aria-hidden="true" />
          <div className="hero__photo">
            {site.heroImage ? (
              <img src={site.heroImage} alt="Mano ubicando un cubo de madera con el ícono de una persona sobre una pirámide de cubos" />
            ) : (
              <span>[Foto]</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
