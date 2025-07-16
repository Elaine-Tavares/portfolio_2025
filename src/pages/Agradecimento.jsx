import styles from './Agradecimento.module.css';
import { CheckCircle } from 'lucide-react';

export default function Agradecimento() {
  return (
    <section className={styles.agradecimentoSection}>
      <div className={styles.conteudo}>
        <CheckCircle className={styles.icone} size={64} />
        <h1 className={styles.titulo}>Mensagem enviada com sucesso!</h1>
        <p className={styles.texto}>
          Agradeço o seu contato 💙 Em breve, responderei com todo carinho.
        </p>
        <a href="/" className={styles.botao}>Voltar ao Portfólio</a>
      </div>
    </section>
  );
}
