import styles from './Contato.module.css';

export default function Contato() {
  return (
    <section id="contato" className={styles.contatoSection}>
      <header>
        <h2 className='titulo'>Entre em Contato</h2>
      </header>
      <p className={styles.subtitulo}>
        Ficarei feliz em conversar com você sobre oportunidades, parcerias ou projetos!
      </p>
      <form
        className={styles.form}
        action="https://formsubmit.co/elainetavares.developer@gmail.com" 
        method="POST"
      >
        {/*Desativa CAPTCHA. (Pode remover se quiser proteção anti-spam)*/}
        <input type="hidden" name="_captcha" value="false" />

        {/*Redireciona o usuário após envio (ex: página de agradecimento)*/}
        <input type="hidden" name="_next" value="http://localhost:5173/agradecimento"/>

        {/*Deixa o e-mail recebido mais bonito (estilizado)*/}
        <input type="hidden" name="_template" value="box"/>

        {/*Envia uma resposta automática para quem preencheu o formulário*/}
        <input type="hidden" name="_autoresponse" value="Olá! Recebemos sua mensagem com sucesso. Em breve entraremos em contato. Obrigada! 💙"/>

        <div className={styles.form_campo}>
        <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome"
            required
          />
        </div>
       
       <div className={styles.form_campo}>
         <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seu@email.com"
            required
          />
       </div>
       
       <div className={styles.form_campo}>
         <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="5"
          placeholder="Escreva sua mensagem..."
          required
        ></textarea>
       </div>
    
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </section>
  );
}
