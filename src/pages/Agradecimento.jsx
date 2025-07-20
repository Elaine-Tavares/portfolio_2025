import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import styles from './Agradecimento.module.css';

export default function Agradecimento() {
  return (
    <section className={styles.agradecimentoSection}>
      <Helmet>
        <title>Obrigada pela visita | ElaineTavaresDev</title>
        <meta
          name="description"
          content="Obrigada pela visita! Em breve, responderei com todo carinho. Elaine Tavares desenvolvedora Front-End."
        />
      </Helmet>
      <div className={styles.conteudo}>
        <CheckCircle className={styles.icone} size={64} />
        <h1 className={styles.titulo}>Mensagem enviada com sucesso!</h1>
        <p className={styles.texto}>
          Agradeço o seu contato 💙 Em breve, responderei com todo carinho.
        </p>
        <Link to='/' className={styles.botao}>Voltar ao Portfólio</Link>
      </div>
    </section>
  );
}
