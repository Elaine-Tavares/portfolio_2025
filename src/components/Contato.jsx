import { useState } from 'react';
import styles from './Contato.module.css';
import { useNavigate } from 'react-router-dom';
import api from  '../services/api'

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [msgDev, setMsgDev] = useState('')
  const [msgConsole, setMsgConsole] = useState('')
  const navigator = useNavigate()
  

  const handleSubmit = async (e) => {
      e.preventDefault()
      setMsgDev("Processando...")
    try {
      const response = await api.post('/captar_formulario.php', {
        nome,
        email,
        mensagem,
      })
      // sucesso 
      if (response.data.success) {
        //exibe a mensagem de sucesso
        setMsgConsole(response.data.message)
        console.log(msgConsole) 

        //limpa os campos
        setEmail('')
        setNome('')
        setMensagem('')
        setTimeout(() => {
          navigator('/agradecimento')
        },3000)
        return;
      
        } else {
          //exibe a mensagem de erro
         setMsgDev(response.data.message)
          // apaga a mensagem de erro após 3s
          setTimeout(() => {
          setMsgDev("") 
        }, 3000);
          return;
      }
    } catch (error) {
      console.error("Erro:", error)
      setMsgDev("Erro ao conectar com o servidor.")
      return;
    } 
  }

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
        onSubmit={handleSubmit}
      >
        <div className={styles.form_campo}>
        <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
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
          value={mensagem}
          onChange={(e) =>setMensagem(e.target.value)}
          required
        ></textarea>
       </div>
    
        <button className={styles.button}>
          Enviar
        </button>
        {msgDev}
      </form>
    </section>
  );
}
