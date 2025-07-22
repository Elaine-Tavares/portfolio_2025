import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ícones (instalado com: npm i lucide-react)
import { Link } from 'react-router-dom';
import logo_capivara_light from '../assets/logo_capivara_ligth.webp'
import styles from './Navbar.module.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    }
   
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo} style={{textDecoration: "none"}}><img src={logo_capivara_light} alt="Logo do site - Capivara na tela do notebook" />Elaine<span>Tavares</span>Web</a>
        <div className={`${styles.overlay} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu} aria-label="Navegação principal">
            <a href="#inicio">Inicio</a>
            <a href="#projetos">Projetos</a>
            <a href="#skills">Habilidades</a>
            <a href="#contato">Contato</a>  
            <Link 
              to='/performance' 
              rel="noopener noreferrer">
              Performance
            </Link>
          </nav>
        </div>
        <button 
          className={styles.menuBtn} 
          onClick={toggleMenu} aria-label="Abrir ou fechar menu" 
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  )
}
