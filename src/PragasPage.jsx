import React from 'react';
import styles from './App.module.css';

const PragasPage = () => {
  const content = {
    title: "POP 6: Controle Integrado de Vetores e Pragas Urbanas",
    text: [
      "Objetivo: Prevenir e combater a presença de insetos, roedores e outras pragas, garantindo a integridade dos alimentos e a segurança do ambiente.",
      "•	Medidas Preventivas: Manter o ambiente limpo e organizado, armazenar lixo em locais fechados e usar telas em janelas e portas.",
      "•	Monitoramento: Inspecionar periodicamente a presença de pragas e instalar armadilhas em pontos estratégicos.",
      "•	Medidas Corretivas: Quando necessário, contratar empresa especializada para controle químico ou físico.",
      "•	Registros: Manter um registro das inspeções, ações tomadas e resultados.",
    ],
  };

  return (
    <main className={styles.slideContentContainer}>
      <div className={styles.slideCard}>
        <h3>{content.title}</h3>
        {content.text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
};

export default PragasPage;