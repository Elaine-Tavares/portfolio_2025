import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import curriculo from '/assets/cv_elaine_tavares_vermelho.webp'
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { FaArrowUp, FaCheckCircle } from 'react-icons/fa';
import styles from './Curriculo.module.css'


export default function Curriculo() {
    const [showTopButton, setShowTopButton] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setShowTopButton(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <section>
        <Helmet>
            <title>Curriculo | ElaineTavaresWeb</title>
            <meta
            name="description"
            content="Currículo de Elaine Tavares – Desenvolvedora Front-End em transição de carreira com foco em React, PHP, MySQL, SEO e boas práticas de performance web. Acesse para conhecer habilidades, formações e experiências."
            />
        </Helmet>
        <nav className={styles.nav} aria-label="Navegação principal">
            <Link 
              to='/' 
              className={styles.logo} 
              style={{textDecoration: "none"}}>
              <img src="/assets/logo_capivara_ligth_96x96.webp" 
              srcSet='/assets/logo_capivara_ligth_64x64.webp, /assets/logo_capivara_ligth_96x96.webp, /assets/logo_capivara_ligth_128x128.webp'  
              alt="Logo do site - Capivara na tela do notebook" />
              Elaine<span>Tavares</span>Web
            </Link>
            <Link to='/' className={styles.home}>Home</Link>
        </nav>
        <main className={styles.curriculo}>
          <img className={styles.curriculo_img} src={curriculo} alt="" />
        </main>
        {showTopButton && (
                  <button className={styles.topo} onClick={scrollToTop} aria-label="Voltar ao topo">
                    <FaArrowUp />
                  </button>
                )}
        <Footer/>
    </section>
  )
}
