import React, { useState } from 'react';
import styles from './App.module.css';
import { ArrowLeft } from 'lucide-react';
// Importe a imagem principal para este POP.
// Troque 'pop2-infografico.png' pelo nome do seu arquivo de imagem.
import pop2_infografico from './assets/pop2-infografico.png';

const ControleAguaPage = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [selectedPoint, setSelectedPoint] = useState(null);

  const introData = {
    title: "💧 Controle da Potabilidade da Água",
    text: "Clique em 'Avançar' para conhecer os pontos de atenção e garantir que a água utilizada no seu estabelecimento seja segura."
  };

  const interactiveData = {
    image: pop2_infografico,
    points: [
      { id: 1, top: '15%', left: '30%', title: "Fontes de água", text: [
        "•	Usar apenas água da rede pública tratada ou de poço/artesiano com laudo de potabilidade.",
        "•	Manter reservatórios (caixas d’água) sempre limpos e tampados."
      ]},
      { id: 2, top: '15%', left: '60%', title: "Limpeza da caixa d’água", text: [
        "•	Realizar a cada 6 meses (ou conforme legislação local).",
        "•	Seguir procedimento: esvaziar, lavar, desinfetar com solução de cloro e enxaguar.",
        "•	Registrar data e responsável pela limpeza."
      ]},
      { id: 3, top: '15%', left: '90%', title: "Controle de qualidade", text: [
        "•	Fazer análise de potabilidade periodicamente (microbiológica e físico-química).",
        "•	Verificar: cor, cheiro, sabor e presença de cloro residual livre.",
        "•	Se houver alterações, comunicar imediatamente e não usar a água até corrigir."
      ]},
      { id: 4, top: '50%', left: '30%', title: "Uso da água", text: [
        "•	Somente utilizar água potável no preparo de alimentos, higienização de utensílios, equipamentos e higiene pessoal.",
        "•	Nunca usar água sem tratamento direto de rios, lagos ou cisternas sem análise."
      ]},
      { id: 5, top: '50%', left: '60%', title: "Produtos químicos", text: [
        "•	Usar apenas cloro ou sanitizantes autorizados para desinfecção.",
        "•	Seguir a diluição recomendada pelo fabricante."
      ]},
      { id: 6, top: '50%', left: '90%', title: "Responsáveis", text: [
        "•	Definir quem realiza a limpeza da caixa d’água.",
        "•	Definir quem coleta amostras para análise.",
        "•	Registrar em planilha/check-list cada ação realizada."
      ]}
    ]
  };

  const handleAdvance = () => {
    setCurrentStep('image');
  };

  const handlePointClick = (pointId) => {
    const point = interactiveData.points.find(p => p.id === pointId);
    setSelectedPoint(point);
  };

  return (
    <main className={styles.slideContentContainer}>
      <h2 className={styles.pageTitle}>{introData.title}</h2>

      {currentStep === 'intro' && (
        <div className={styles.slideCard}>
          <h3>{introData.title}</h3>
          <p>{introData.text}</p>
          <div className={styles.navigation}>
            <button onClick={handleAdvance}>Avançar</button>
          </div>
        </div>
      )}

      {currentStep === 'image' && (
        <>
          

          <div className={styles.interactiveImageWrapper}>
            {interactiveData.image && <img src={interactiveData.image} alt="Infográfico de Controle de Água" className={styles.interactiveImage} />}
            {interactiveData.points.map((point) => (
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
                {selectedPoint.text.map((paragraph, index) => (
                  <p key={index} className={styles.hotspotParagraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default ControleAguaPage;