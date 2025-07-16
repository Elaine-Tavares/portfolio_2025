import hero_foto from '../assets/hero_foto.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
     <section className={styles.hero} id='inicio'>
        <meta name="description" content="Elaine Tavares, desenvolvedora front-end com experiência em HTML, CSS, JavaScript, React, PHP e MySQL. Conheça mais sobre minha trajetória e projetos." />
        <h1 className='titulo'>&lt;Elaine Tavares /&gt;</h1> 
        <h2 className='subtitulo'>Desenvolvedora Front-end </h2> 
        <p className={styles.hero_tecnologias}>HTML | CSS | JavaScript | React | PHP | MySQL | SEO | GitHub</p>
        <div className={styles.sobre_mim_container}>
          <div className={styles.sobre_mim_container_img}>
            <img src={hero_foto} alt="Avatar de Elaine Tavares, desenvolvedora front-end, com fundo tech dark" />
          </div>
          <div className={styles.sobre_mim_container_texto}>
              <h2 className='titulo'>Sobre Mim</h2>
              <p className='texto'>Sou formada em Tecnologia em Gestão Financeira e, ao longo do tempo, desenvolvi uma paixão pelo Desenvolvimento Web, o que me levou a buscar uma transição de carreira para essa área. Tenho competências em GitHub, HTML, CSS, JavaScript, React, PHP e MySQL (até o momento), essas são as principais ferramentas que utilizo para construir soluções web.
              Além disso, tive a oportunidade de atuar como voluntária em Desenvolvimento Front-end no Instituto Capoeira Social, onde pude aplicar e aprimorar meus conhecimentos em um projeto real.
              Atualmente, sou universitária no curso Tecnólogo de Sistemas para Internet, o que reforça minha dedicação e compromisso em consolidar minha carreira na área do Desenvolvimento Web </p>
            <div className={styles.container_buttons}>
              <a href="#projetos" className={styles.button}>Ver Projetos</a> 
              <a href="https://drive.google.com/file/d/1U2ZVi4OI5XdCCe1VtNpTIR7_CXUFeVqD/view?usp=sharing" className={styles.button} target='blank' rel="noopener noreferrer">Currículo</a>
            </div>
          </div>
         </div>  
         </section> 
  )
}
