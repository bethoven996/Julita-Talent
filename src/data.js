// ─────────────────────────────────────────────
// Todo el contenido editable de la página está acá.
// Completá los [PLACEHOLDERS] con los datos reales.
// ─────────────────────────────────────────────

export const site = {
  brandTop: 'Julieta',
  brandBottom: 'Talent',
  descriptor: 'Consultora de RR.HH.',
  fullName: '[Nombre y apellido]',
  career: '[Carrera de RRHH]',
  institution: '[Institución]',
  whatsapp: '5493410000000', // formato internacional, sin + ni espacios
  whatsappLabel: '[Número]',
  instagram: '[usuario]',
  linkedin: 'https://www.linkedin.com/in/[usuario]',
  email: '[email]',
  heroImage: `${import.meta.env.BASE_URL}hero.jpg`, // reemplazala por una foto en alta resolución en /public
  aboutImage: null, // ej: '/julieta.jpg'
  logoImage: null, // si tiene el logo en PNG/SVG: '/logo.svg' (reemplaza el logo dibujado)
}

export const audiences = {
  empresas: {
    label: 'Para empresas',
    tab: 'Empresas',
    short: 'Soy empresa',
    icon: 'building',
    intro: 'Soluciones para encontrar y desarrollar el mejor talento.',
    services: [
      { icon: 'users', title: 'Reclutamiento y selección', text: 'Buscamos y convocamos a los perfiles que tu equipo necesita, de principio a fin.' },
      { icon: 'clipboard', title: 'Evaluación y preselección', text: 'Analizamos a los candidatos y te presentamos los perfiles más adecuados para el puesto.' },
      { icon: 'compass', title: 'Consultoría de Recursos Humanos', text: 'Te asesoramos en descripción de puestos, procesos internos y organización del equipo.' },
      { icon: 'briefcase', title: 'Gestión externa de RR.HH.', text: 'Nos encargamos de las tareas de Recursos Humanos para que te enfoques en tu negocio.' },
    ],
    options: ['Reclutamiento y selección', 'Evaluación y preselección', 'Consultoría de RR.HH.', 'Gestión externa de RR.HH.', 'Otra consulta'],
    placeholder: 'Contanos qué puesto necesitás cubrir y para cuándo',
  },
  personas: {
    label: 'Para personas',
    tab: 'Personas',
    short: 'Busco trabajo',
    icon: 'users3',
    intro: 'Nuevas oportunidades para crecer profesionalmente.',
    services: [
      { icon: 'file', title: 'Creación y optimización de CV', text: 'Armamos o renovamos tu currículum para que muestre lo mejor de tu experiencia.' },
      { icon: 'linkedin', title: 'Creación y optimización de LinkedIn', text: 'Titular, extracto y experiencia pensados para que te encuentren los reclutadores.' },
      { icon: 'book', title: 'Capacitación en búsqueda laboral', text: 'Dónde buscar, cómo postularte y cómo organizar tu búsqueda para avanzar más rápido.' },
      { icon: 'chat', title: 'Preparación para entrevistas', text: 'Simulamos una entrevista y te damos una devolución sobre qué reforzar.' },
    ],
    options: ['Creación / optimización de CV', 'LinkedIn', 'Capacitación en búsqueda laboral', 'Preparación para entrevistas', 'No sé, quiero asesorarme'],
    placeholder: 'Contanos brevemente a qué puesto o rubro apuntás',
  },
}

export const reasons = [
  { icon: 'handshake', title: 'Conexiones estratégicas' },
  { icon: 'chart', title: 'Soluciones a medida' },
  { icon: 'heart', title: 'Acompañamiento cercano' },
  { icon: 'star', title: 'Compromiso con tu crecimiento' },
]
