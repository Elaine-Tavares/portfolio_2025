import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('SW registrado com sucesso:', registration);
      })
      .catch((err) => {
        console.log('Erro ao registrar o SW:', err);
      });
  });
}

createRoot(document.getElementById('root')).render(
    
    <App />
)

