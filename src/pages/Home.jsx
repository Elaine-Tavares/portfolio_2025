import Projetos from '../components/Projetos'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contato from '../components/Contato'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import whats from '../assets/whats.webp'
import Garanto from '../components/Garanto'
import { Helmet } from 'react-helmet';
import styles from './Home.module.css'



export default function Home() {
  return (
          <>
          <Helmet>
            <title>ElaineTavaresDev | Sites rápidos e que funcionam bem em qualquer dispositivo</title>
            <meta
              name="description"
              content="Criação de sites rápidos e responsivos. Atuo com tecnologias como GitHub, HTML, CSS, JavaScript, React, PHP e MySQL. Elaine Tavares, desenvolvedora Front-End."
           />
          </Helmet>
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
            <Garanto/>
            <Projetos/>
            <Skills/>
            <Contato/>
            <Footer/>
          </>  
  )
}
