// eslint-disable-next-line no-unused-vars
import {motion}  from 'framer-motion';

import { useEffect, useState } from 'react';
import { FaArrowUp, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';
import logo_capivara_ligth from '../assets/logo_capivara_ligth.webp'
import styles from './Performance.module.css';

export default function Performance() {
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
        <title>Performance Web | ElaineTavaresWeb</title>
        <meta
          name="description"
          content="Saiba como otimizo a performance dos meus sites com práticas como lazy loading, compressão de imagens, minificação e análise no PageSpeed Insights." 
        />
      </Helmet>
      <nav className={styles.nav} aria-label="Navegação principal">
        <Link to='/' className={styles.logo} style={{textDecoration: "none"}}><img src={logo_capivara_ligth} alt="Logo do site - Capivara na tela do notebook" />Elaine<span>Tavares</span>Web</Link>
        <Link to='/' className={styles.home}>Home</Link>
      </nav>
        <main className={styles.performance}>
            <motion.h1 className="titulo" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        Boas Práticas de Performance Web
      </motion.h1>

      <motion.p className={styles.intro} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Nesta página, compartilho as práticas que sigo para garantir que os sites que desenvolvo sejam, além de bonitos, rápidos, responsivos e otimizados.
      </motion.p>

      {[
        ['📄 Estrutura de Código', [
          'HTML semântico e enxuto',
          'Componentização e reaproveitamento de código (React)',
          'Separação de responsabilidades: CSS, JS e lógica',
          'Eliminação de código morto e imports desnecessários'
        ]],
        ['🖼️ Otimização de Imagens', [
          'Uso de formatos modernos (WebP, AVIF)',
          'Compressão com TinyPNG, Squoosh, etc.',
          'Lazy loading para imagens não críticas',
          'Tamanhos adequados para o contexto de exibição'
        ]],
        ['📦 Gerenciamento de Recursos', [
          'Minificação de arquivos com Vite/Webpack',
          'Compressão GZIP/Brotli no servidor',
          'Pré-carregamento de fontes críticas',
          'Code splitting e importações dinâmicas'
        ]],
        ['📱 Responsividade & Mobile First', [
          'Design mobile-first com media queries otimizadas',
          'Evitar conteúdos ocultos que ainda carregam',
          'Animações com transform e opacity'
        ]],
        ['⚙️ Bibliotecas e Frameworks', [
          'Uso apenas do essencial',
          'Versões leves e tree shaking ativo',
          'Componentes pesados carregados sob demanda'
        ]],
        ['🗂️ Fontes Web', [
          'Importar apenas os pesos usados',
          'Usar display=swap e subset latino',
          'Pré-carregar fontes importantes'
        ]],
        ['🛠️ Backend e Banco de Dados', [
          'Consultas SQL otimizadas e uso de cache',
          'Evitar retornos desnecessários',
          'Compactação das respostas'
        ]],
        ['📊 Análise de Performance', [
          'Testes com PageSpeed Insights, Lighthouse e GTmetrix',
          'Correção de bloqueios de renderização',
          'Monitoramento de tempo de interatividade e carregamento'
        ]],
        ['🌐 Extras para Produção', [
          'Cache control no servidor',
          'Uso de CDN para assets',
          'Minimização de redirecionamentos'
        ]]
      ].map(([titulo, itens], i) => (
        <motion.div className={styles.secao} key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <h2>{titulo}</h2>
          <ul>
            {itens.map((item, j) => (
              <li key={j}><FaCheckCircle className={styles.icone} /> {item}</li>
            ))}
          </ul>
        </motion.div>
      ))}

      <motion.p className={styles.final} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Essas práticas fazem parte do meu processo de desenvolvimento e refletem meu compromisso em entregar sites rápidos, acessíveis e de alta qualidade.
      </motion.p>

      {showTopButton && (
        <button className={styles.topo} onClick={scrollToTop} aria-label="Voltar ao topo">
          <FaArrowUp />
        </button>
      )}
        </main>
      <Footer/>
    </section>
  );
}
