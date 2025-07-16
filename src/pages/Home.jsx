import Projetos from '../components/Projetos'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contato from '../components/Contato'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
          <>
            <Navbar/>
            <Hero/>
            <Projetos/>
            <Skills/>
            <Contato/>
            <Footer/>
          </>  
  )
}
