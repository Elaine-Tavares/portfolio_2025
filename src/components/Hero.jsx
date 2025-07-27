import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
     <section className={styles.hero} id='inicio'>
        <div className={styles.sobre_mim_container}>
          <div className={styles.sobre_mim_container_img}>
            <h1>&lt;Elaine Tavares /&gt;</h1> 
            <h2 className='subtitulo'>Desenvolvedora Front-End </h2> 
            <img 
              src="/assets/hero_foto_768x869.webp" 
              alt="Foto de Elaine Tavares, desenvolvedora Front-End"
              srcset="/assets/hero_foto_375x424.webp, /assets/hero_foto_768x869.webp, /assets/hero_foto_1440x1630.webp"
              sizes="(max-width: 768px) 100vw, 640px"
           />
           <div className={styles.container_buttons}>
              <a href="#projetos" className={styles.button}>Projetos</a> 
              <Link 
                to='/curriculo'
                rel="noopener noreferrer"
                className={styles.button}>   
                Currículo
              </Link>
            </div>
          </div>
          <div className={styles.sobre_mim_container_texto}>
            <h3>Sites rápidos e que funcionam bem em qualquer dispositivo</h3>
            <p className={styles.hero_tecnologias}>
              HTML | CSS | JavaScript | React | PHP | MySQL | SEO | GitHub
            </p>
            <p className={styles.texto}>
              Estou em transição de carreira para a área de Desenvolvimento Web, com foco na criação de sites personalizados, modernos e responsivos. Busco sempre entregar soluções que funcionem bem, sejam fáceis de navegar e causem uma boa impressão.
            </p>
            <h4>O que procuro aplicar nos projetos:</h4>
            <div className={styles.lista}>
              ✅ Layout responsivo, que se adapta a diferentes tamanhos de tela <br />
              ✅ Boas práticas de SEO, para ajudar seu site a ser encontrado no Google <br />
              ✅ Avaliação de desempenho com PageSpeed Insights, para garantir carregamento mais rápido <br />
              ✅ Design limpo e cuidado com os detalhes, pensando na experiência do visitante
            </div>
            <p className={styles.texto}>
              Tenho aprendido muito e me dedicado com carinho ao Desenvolvimento Web, sempre buscando evoluir e entender melhor as necessidades de cada projeto. Se você está procurando alguém para criar um site com atenção e cuidado, fico feliz em conversar sobre sua ideia. O orçamento é sem compromisso! 🤑😊
            </p>          
          </div>
        </div>  
      </section> 
  )
}
