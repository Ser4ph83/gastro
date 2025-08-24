// Importa a biblioteca React para construir componentes da UI.
import React from 'react';
// Importa o ReactDOM para interagir com o DOM (Document Object Model) do navegador.
import ReactDOM from 'react-dom/client';
// Importa o componente principal da sua aplicação, 'App'.
// 'App' contém a lógica e a estrutura da sua homepage.
import App from './App.jsx';
// IMPORTAÇÃO FUNDAMENTAL DO SEU ARQUIVO CSS PRINCIPAL.
// É através desta importação que o Vite processa as diretivas Tailwind
// e inclui os estilos gerados na sua aplicação.
import './index.css';

// Cria a raiz para a renderização da sua aplicação React.
// Isso conecta seu aplicativo React ao elemento HTML com o id 'root' no 'index.html'.
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> é um componente que ajuda a identificar problemas potenciais
  // em sua aplicação durante o desenvolvimento.
  <React.StrictMode>
    {/* O componente 'App' é renderizado dentro do 'StrictMode'. */}
    <App />
  </React.StrictMode>,
);
