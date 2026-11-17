import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'
import { Help, Services, Why, About, Banner, Footer } from './components/Sections.jsx'

export default function App() {
  // 'empresas' | 'personas' — compartido entre las tarjetas, servicios y contacto
  const [audience, setAudience] = useState('empresas')

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Help onPick={setAudience} />
        <Services audience={audience} setAudience={setAudience} />
        <Why />
        <About />
        <Banner />
        <Contact audience={audience} setAudience={setAudience} />
      </main>
      <Footer />
    </>
  )
}
