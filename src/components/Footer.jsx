import styles from './Footer.module.css';
import { Github, Linkedin, Mail, MessageCircle  } from 'lucide-react';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.nome}>Desenvolvido com carinho por Elaine Tavares ©{anoAtual}</p>
          <a
            href="mailto:elainetavares.developer@gmail.com" target='blank'  rel="noopener noreferrer"
            title="Enviar um e-mail para Elaine Tavares"
            className={styles.email}
            >
            <Mail size={18} style={{ marginRight: '8px', marginBottom: "-3px" }} />
            elainetavares.developer@gmail.com
          </a>
          <p className="texto" style={{textAlign: "center"}}>
            Desenvolvedora Front-end | HTML, CSS, JS, React, PHP, MySQL
          </p>
        </div>

        <nav className={styles.links} aria-label="Links para redes sociais">
          <a
            href="https://github.com/Elaine-Tavares"
            target="_blank"
            rel="noopener noreferrer"
            title="Acessar o GitHub de Elaine Tavares"
          >
            <Github />
          </a>
          <a
            href="www.linkedin.com/in/elaine-tavares-b5797b1b0"
            target="_blank"
            rel="noopener noreferrer"
            title="Acessar o LinkedIn de Elaine Tavares"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:elainetavares.developer@gmail.com"
            title="Enviar um e-mail para Elaine Tavares"
          >
           <MessageCircle />
          </a>
        </nav>
      </div>
    </footer>
  );
}
