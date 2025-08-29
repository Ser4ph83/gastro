import React from 'react';
import styles from './App.module.css';

const ManutencaoPage = () => {
  const content = {
    title: "POP 5: Manutenção Preventiva e Calibração de Equipamentos",
    text: [
      "Objetivo: Assegurar o bom funcionamento, a segurança e a precisão dos equipamentos, evitando contaminações cruzadas e garantindo a qualidade dos produtos.",
      "•	Inspeção e Manutenção: Realizar inspeções periódicas e manutenções preventivas (limpeza, lubrificação, substituição de peças).",
      "•	Calibração: Calibrar balanças, termômetros e outros instrumentos de medição em intervalos definidos para garantir a precisão.",
      "•	Registros: Manter um histórico de manutenção e calibração de cada equipamento.",
      "•	Equipamentos de reserva: Ter equipamentos de reserva ou planos de contingência em caso de falha.",
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

export default ManutencaoPage;