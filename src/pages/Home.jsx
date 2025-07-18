import Projetos from '../components/Projetos'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contato from '../components/Contato'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './Home.module.css'
import whats from '../assets/whats.png'


export default function Home() {
  return (
          <>
          <Navbar/>
            <a 
              href="https://wa.link/b9mkmm"
              target="_blank"
              rel="noopener noreferrer"
              title="Enviar um whatsapp para Elaine Tavares"
            >
             <img className={styles.whats} src={whats} alt="Icone do whatsapp" />
            </a>
            <Hero/>
            <Projetos/>
            <Skills/>
            <Contato/>
            <Footer/>
          </>  
  )
}
