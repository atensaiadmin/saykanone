import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Disciplines from './components/Disciplines.jsx'
import Principles from './components/Principles.jsx'
import Classes from './components/Classes.jsx'
import Grandmaster from './components/Grandmaster.jsx'
import Seminars from './components/Seminars.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Principles />
        <Grandmaster />
        <Classes />
        <Seminars />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
