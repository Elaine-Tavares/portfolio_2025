import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Projeto.module.css'

export default function Projeto({imagem, titulo, descricao, link, tecnologias}) {
   useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  return (
    <div className={styles.projeto} data-aos="fade-up">
      <img 
        className={styles.imagem} 
        src={imagem.src} 
        srcSet={imagem.srcset}
        sizes="(max-width: 768px) 100vw, 640px"
        alt={`Imagem ilustrativa do projeto ${titulo}`} 
        loading="lazy" 
      /> 
      <div className={styles.info}>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <ul className={styles.tecnologias}>
          {tecnologias.map((tec, index) => (
            <li key={index}>{tec}</li>
          ))}
        </ul>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.botao} 
          title={`Abrir o projeto ${titulo}`} // Para contexto adicional no SEO
        >
          Ver Projeto
        </a>
      </div>
    </div>
  )
}
