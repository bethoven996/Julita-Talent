import { useState } from 'react'
import Icon from './Icon.jsx'
import { AudienceTabs, LinedTitle } from './Sections.jsx'
import { site, audiences } from '../data.js'

// El formulario no necesita backend: arma el mensaje y abre WhatsApp
// con el texto precargado. Ideal para hosting estático (Cloudflare Pages).
export default function Contact({ audience, setAudience }) {
  const a = audiences[audience]
  const isCompany = audience === 'empresas'
  const [form, setForm] = useState({ nombre: '', empresa: '', contacto: '', servicio: '', mensaje: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const servicio = a.options.includes(form.servicio) ? form.servicio : a.options[0]

  const onSubmit = (e) => {
    e.preventDefault()
    const lines = [
      `Hola! Soy ${form.nombre}${isCompany && form.empresa ? ` de ${form.empresa}` : ''}.`,
      `Me interesa: ${servicio}.`,
      form.mensaje,
      form.contacto && `Mi contacto: ${form.contacto}`,
    ].filter(Boolean)
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener')
  }

  const channels = [
    { icon: 'whatsapp', label: 'WhatsApp', value: site.whatsappLabel, href: `https://wa.me/${site.whatsapp}` },
    { icon: 'instagram', label: 'Instagram', value: `@${site.instagram}`, href: `https://instagram.com/${site.instagram}` },
    { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
  ]

  return (
    <section id="contacto" className="section" aria-labelledby="contacto-title">
      <div className="container">
        <LinedTitle id="contacto-title">Hablemos</LinedTitle>
        <div className="contact">
          <div className="contact__info">
            <p className="contact__lead">
              Ya sea que busques sumar talento a tu equipo o dar tu próximo paso profesional,
              <em> estamos para acompañarte.</em>
            </p>
            <div className="channels">
              {channels.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="channel">
                  <span className="channel__icon"><Icon name={c.icon} size={20} strokeWidth={1.8} /></span>
                  <span className="channel__text">
                    <strong>{c.label}</strong>
                    <small>{c.value}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <AudienceTabs audience={audience} setAudience={setAudience} idPrefix="frm" />
            <div id="frm-panel" role="tabpanel" aria-labelledby={`frm-tab-${audience}`} className="form__fields">
              <div className="field">
                <label htmlFor="f-nombre">Nombre</label>
                <input id="f-nombre" required value={form.nombre} onChange={set('nombre')} placeholder="Tu nombre" />
              </div>
              {isCompany && (
                <div className="field">
                  <label htmlFor="f-empresa">Empresa</label>
                  <input id="f-empresa" value={form.empresa} onChange={set('empresa')} placeholder="Nombre de la empresa" />
                </div>
              )}
              <div className="field">
                <label htmlFor="f-contacto">Email o WhatsApp</label>
                <input id="f-contacto" value={form.contacto} onChange={set('contacto')} placeholder="Para responderte" />
              </div>
              <div className="field">
                <label htmlFor="f-servicio">¿Qué necesitás?</label>
                <select id="f-servicio" value={servicio} onChange={set('servicio')}>
                  {a.options.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-msg">Mensaje</label>
                <textarea id="f-msg" rows={4} value={form.mensaje} onChange={set('mensaje')} placeholder={a.placeholder} />
              </div>
              <button type="submit" className="btn btn--green btn--block">
                Enviar por WhatsApp <Icon name="arrow" size={18} strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
