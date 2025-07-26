import Projeto from './Projeto';
import styles from './Projetos.module.css';

export default function Projetos() {
    // Exemplo de dados (futuramente posso importar de um JSON ou CMS)
    const listaProjetos = [
    {
      imagem: {
        src: '/assets/projetos_elaines_charm_640x301.webp',
        srcset: '/assets/projetos_elaines_charm_320x150.webp 320w, /assets/projetos_elaines_charm_640x301.webp 640w'
      } ,
      titulo: 'Elaine’s Charm (em desenvolvimento...)',
      descricao: 'E-commerce de cosméticos feito com React, PHP e MySQL, com autenticação e carrinho de compras.',
      tecnologias: ['React', 'PHP', 'MySQL', 'PHPMailer'],
      link: 'https://ecommerce-react-php-theta.vercel.app/',
    },
    {
       imagem: {
        src: '/assets/projetos_organo_pets_640x291.webp',
        srcset: '/assets/projetos_organo_pets_320x145.webp 320w, /assets/projetos_organo_pets_640x291.webp 640w'
      } ,
      titulo: 'Organo Pets',
      descricao: 'Cria cards bonitinhos com as fotos dos seus pets, com localStorage tem a funcionalidade de excluir card e alterar a cor.',
      tecnologias: ['React', 'CSS Module'],
      link: 'https://organopet.vercel.app/',
    },
    {
       imagem: {
        src: '/assets/projetos_hulu_640x324.webp',
        srcset: '/assets/projetos_hulu_320x162.webp 320w, /assets/projetos_hulu_640x324.webp 640w'
      } ,
      titulo: 'Réplica Hulu',
      descricao: 'Repliquei o site hulu.com, com foco em reforçar conceitos de estruturação semântica, responsividade e boas práticas em HTML e CSS.',
      tecnologias: ['HTML', 'CSS'],
      link: 'https://hulu-teal.vercel.app/',
    }
];
  return (
    <section id="projetos" className={styles.projetosSection}>
      <header>
        <h1>Projetos</h1>
      </header> 
      <div className={styles.listaProjetos}>
        {listaProjetos.map((projeto, index) => (
          <Projeto
            key={index}
            imagem={projeto.imagem}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            tecnologias={projeto.tecnologias}
            link={projeto.link}
          />
        ))}
      </div>
    </section>
  )
}
