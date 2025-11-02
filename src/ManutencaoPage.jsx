import React, { useState } from 'react';
import styles from './App.module.css'; // Usamos o App.module.css para estilos específicos de layout
// Importe a imagem principal para este POP.
import pop5_infografico from './assets/pop5.png'; // Altere 'pop5.jpg' se o nome do seu arquivo for diferente

// Dados para os pontos interativos do POP 5
const interactiveData = {
  image: pop5_infografico,
  points: [
    { id: 1, top: '42%', left: '38%', title: "🔧 Inspeção e Manutenção Preventiva", text: [
      "•	Realizar inspeções periódicas de todos os equipamentos (fogões, fornos, freezers, etc.).",
      "•	Manter um cronograma de manutenção preventiva (limpeza profunda, lubrificação, substituição de peças).",
      "•	A lubrificação de equipamentos como a fatiadora de frios (ilustrada ao lado) deve ser feita com **óleos de grau alimentício**."
    ]},
    { id: 2, top: '65%', left: '30%', title: "💦 Higienização e Limpeza dos Equipamentos", text: [
      "•	Limpar diariamente equipamentos de alto risco (fatiadoras, batedeiras).",
      "•	Desmontar e higienizar todas as partes removíveis conforme a frequência de uso.",
      "•	Garantir que os equipamentos estejam secos após a limpeza e antes do uso."
    ]},
    { id: 3, top: '93%', left: '46%', title: "✅ Calibração de Instrumentos de Medição", text: [
      "•	Calibrar termômetros e balanças (como a balança de bancada na imagem) em intervalos definidos.**",
      "•	A precisão na medição é crucial para a segurança alimentar e controle de custos.",
      "•	Guardar os certificados e registros de calibração para auditoria."
    ]},
    { id: 4, top: '54%', left: '51%', title: "📋 Registros e Treinamento da Equipe", text: [
      "•	Manter um histórico detalhado de manutenção e calibração para cada equipamento.",
      "•	O checklist (na mão do manipulador) deve ser preenchido diariamente/semanalmente, registrando as verificações.",
      "•	Treinar a equipe sobre como identificar falhas, limpar corretamente e reportar problemas."
    ]},
  ]
};

const ManutencaoPage = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handlePointClick = (pointId) => {
    const point = interactiveData.points.find(p => p.id === pointId);
    setSelectedPoint(point);
  };

  return (
    <main className={styles.interactiveContainer}>
      <h2 className={styles.pageTitle}>POP 5: Manutenção Preventiva e Calibração de Equipamentos</h2>
      
      <div className={styles.interactiveImageWrapper}>
        <img src={interactiveData.image} alt="Infográfico de Manutenção Preventiva" className={styles.interactiveImage} />

        {interactiveData.points.map(point => (
          <div
            key={point.id}
            className={styles.hotspot}
            style={{ top: point.top, left: point.left }}
            onClick={() => handlePointClick(point.id)}
          >
            <span className={styles.hotspotNumber}>{point.id}</span>
          </div>
        ))}
      </div>

      {selectedPoint && (
        <div className={styles.hotspotTextContainer}>
          <h3 className={styles.hotspotTitle}>{selectedPoint.title}</h3>
          <div className={styles.hotspotText}>
            {selectedPoint.text.map((line, index) => (
              <p key={index} className={styles.hotspotParagraph}>{line}</p>
            ))}
            <button 
              className={styles.closeHotspotBtn} 
              onClick={() => setSelectedPoint(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ManutencaoPage;