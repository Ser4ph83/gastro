import React from 'react';
import styles from './App.module.css';

const RecolhimentoPage = () => {
  const content = {
    title: "POP 8: Programa de Recolhimento de Alimentos",
    text: [
      "Objetivo: Retirar do mercado, de forma rápida e segura, produtos que apresentem risco à saúde do consumidor ou não conformidade com a legislação.",
      "•	Quando aplicar: Presença de corpos estranhos (vidro, metal, plástico, etc.), contaminação microbiológica, química ou física, erros de rotulagem ou alterações sensoriais.",
      "•	Etapas do Recolhimento: Identificar o problema, comunicar a vigilância sanitária, rastrear, recolher os produtos, armazená-los de forma segura, dar um destino final adequado (descarte ou reprocessamento) e documentar todas as etapas.",
      "•	Comunicação: Informar o consumidor sobre o risco, orientar sobre a devolução e garantir a substituição ou reembolso.",
      "•	Treinamento: Realizar treinamentos e simulações com a equipe para testar a eficiência do programa.",
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

export default RecolhimentoPage;