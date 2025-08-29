import React, { useState } from 'react';
import styles from './App.module.css';

// Importe a imagem principal para este POP.
// A imagem deve conter todas as cenas do POP 1 em um único infográfico.
// Troque 'pop1-infografico.png' pelo nome do seu arquivo de imagem.
import pop1_infografico from './assets/pop1-infografico.png';

// Dados para os pontos interativos do POP 1
const interactiveData = {
  image: pop1_infografico,
  points: [
    { id: 1, top: '42%', left: '32.4%', title: "👍Instalações (paredes, pisos, teto, portas, janelas)", text: [
      "•	Limpar diariamente com água e detergente neutro.",
      "•	Fazer higienização periódica com desinfetante;",
      "•	Manter livres de mofo, gordura, poeira e insetos;"
    ]},
    { id: 2, top: '42%', left: '64%', title: "👍Equipamentos (fogões, geladeiras, freezers, batedeiras, etc.)", text: [
      "•	Limpar após cada uso.",
      "•	Fazer higienização profunda em intervalos definidos.",
      "•	Retirar restos de alimentos e resíduos acumulados."
    ]},
    { id: 3, top: '42%', left: '96%', title: "👍Móveis (mesas, prateleiras, balcões, armários)", text: [
      "•	Limpar sempre antes e depois do uso.",
      "•	Usar pano limpo, detergente e desinfetante adequado (álcool 70%)",
      "•	Manter secos e organizados."
    ]},
    { id: 4, top: '52.5%', left: '32.4%', title: "👍Produtos de limpeza", text: [
      "•	Usar apenas os aprovados para uso em áreas de alimentos.",
      "•	Guardar separados dos alimentos e utensílios.",
      "•	Rotular e identificar corretamente."
    ]},
    { id: 5, top: '52.5%', left: '64%', title: "👍Utensílios (panelas, facas, colheres, pratos, copos, tábuas de corte, etc.)", text: [
      "•	Lavar com água corrente, detergente e esponja limpa.",
      "•	Enxaguar bem para não deixar resíduo.",
      "•	Secar ao ar ou com pano limpo e guardado em local protegido."
    ]},
    { id: 6, top: '52.5%', left: '96%', title: "👍Frequência da Limpeza", text: [
      "•	Diária: pisos, bancadas, utensílios usados, equipamentos de uso constante.",
      "•	Semanal: paredes, prateleiras, equipamentos menos usados.",
      "•	Mensal: limpeza geral e detalhada de toda a área."
    ]},
  ]
};

const HigieneInstalacoesPage = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handlePointClick = (pointId) => {
    const point = interactiveData.points.find(p => p.id === pointId);
    setSelectedPoint(point);
  };

  return (
    <main className={styles.interactiveContainer}>
      <h2 className={styles.pageTitle}>POP 1: Higiene de Instalações, Equipamentos, Móveis e Utensílios</h2>
      
      <div className={styles.interactiveImageWrapper}>
        <img src={interactiveData.image} alt="Infográfico de Higiene de Instalações" className={styles.interactiveImage} />

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
    </div>
  </div>
)}
    </main>
  );
};

export default HigieneInstalacoesPage;