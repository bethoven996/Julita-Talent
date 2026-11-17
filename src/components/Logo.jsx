import { site } from '../data.js'

// Destello de 4 puntas (como el del logo)
export function Sparkle({ className }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M12 0C12.9 7 17 11.1 24 12 17 12.9 12.9 17 12 24 11.1 17 7 12.9 0 12 7 11.1 11.1 7 12 0Z" fill="currentColor" />
    </svg>
  )
}

// Monograma JT con destellos
export function Monogram({ size = 'md' }) {
  return (
    <span className={`monogram monogram--${size}`} aria-hidden="true">
      <span className="monogram__j">J</span>
      <span className="monogram__t">T</span>
      <Sparkle className="monogram__spark monogram__spark--pink" />
      <Sparkle className="monogram__spark monogram__spark--gold" />
    </span>
  )
}

// Logo horizontal: monograma | JULIETA / TALENT
export default function Logo({ size = 'md', showDescriptor = false }) {
  if (site.logoImage) {
    return <img src={site.logoImage} alt={`${site.brandTop} ${site.brandBottom}`} className={`logo-img logo-img--${size}`} />
  }
  return (
    <span className={`logo logo--${size}`}>
      <Monogram size={size} />
      <span className="logo__divider" aria-hidden="true" />
      <span className="logo__words">
        <span>{site.brandTop}</span>
        <span>{site.brandBottom}</span>
        {showDescriptor && <small>{site.descriptor}</small>}
      </span>
    </span>
  )
}
