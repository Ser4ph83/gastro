import React from 'react';
import styles from './App.module.css';

const SelecaoPage = () => {
  const content = {
    title: "POP 7: Seleção de Matérias-Primas, Ingredientes e Embalagens",
    text: [
      "Objetivo: Escolher e receber insumos de forma segura, garantindo sua qualidade e procedência.",
      "•	Critérios de Seleção: Adquirir apenas de fornecedores confiáveis, inspecionando a qualidade, validade, integridade das embalagens e condições de transporte.",
      "•	Recebimento: Conferir a nota fiscal, a temperatura de produtos refrigerados e congelados e as condições físicas dos produtos.",
      "•	Armazenamento: Armazenar os insumos em locais adequados, separados por tipo, em prateleiras e longe de produtos de limpeza.",
      "•	Sistema PEPS: Utilizar o sistema PEPS (Primeiro que Entra, Primeiro que Sai) para evitar o desperdício e o uso de produtos vencidos.",
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

export default SelecaoPage;