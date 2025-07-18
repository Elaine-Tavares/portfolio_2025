import hero_foto from '../assets/hero_foto.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
     <section className={styles.hero} id='inicio'>
        <meta name="description" content="Elaine Tavares, desenvolvedora front-end com experiência em HTML, CSS, JavaScript, React, PHP e MySQL. Conheça mais sobre minha trajetória e projetos." />
        <h1 className='titulo'>&lt;Elaine Tavares /&gt;</h1> 
        <h2 className='subtitulo'>Desenvolvedora Front-End </h2> 
        <h3 style={{color:"white"}}>Sites rápidos e que funcionam bem em qualquer dispositivo</h3>
        <p className={styles.hero_tecnologias}>HTML | CSS | JavaScript | React | PHP | MySQL | SEO | GitHub</p>
        <div className={styles.sobre_mim_container}>
          <div className={styles.sobre_mim_container_img}>
            <img src={hero_foto} alt="Avatar de Elaine Tavares, desenvolvedora front-end, com fundo tech dark" />
          </div>
          <div className={styles.sobre_mim_container_texto}>
              <h2 className='titulo'>Sobre Mim</h2>
              <p className='texto'>Sou apaixonada por Desenvolvimento Web e atuo com tecnologias como GitHub, HTML, CSS, JavaScript, React, PHP e MySQL (até o momento!). Essas são as ferramentas que utilizo para criar soluções web funcionais e eficientes. Gosto de aprender coisas novas e estou em constante evolução. Pegar um projeto do zero, ver ele tomando forma e chegando ao ar é algo que realmente me motiva! Atualmente, curso Sistemas para Internet na graduação, o que tem ampliado meus conhecimentos e reforçado o meu compromisso em uma carreira sólida e de excelência na área do Desenvolvimento Web.
              </p>
            <div className={styles.container_buttons}>
              <a href="#projetos" className={styles.button}>Projetos</a> 
              <a href="https://drive.google.com/file/d/1U2ZVi4OI5XdCCe1VtNpTIR7_CXUFeVqD/view?usp=sharing" className={styles.button} target='blank' rel="noopener noreferrer">Currículo</a>
            </div>
          </div>
         </div>  
         </section> 
  )
}
