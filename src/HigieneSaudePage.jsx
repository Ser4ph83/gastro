import React, { useState } from 'react';
import styles from './App.module.css'; // Importa os estilos do arquivo principal
import { ArrowLeft } from 'lucide-react';
import higieneImg from './assets/img1-btn2.png'; // Importa a imagem que você baixou

const HigieneSaudePage = () => {
  const [currentStep, setCurrentStep] = useState('intro'); // 'intro' ou 'image'

  // Dados da tela introdutória
  const introData = {
    title: "Higiene e Saúde do Manipulador",
    text: "Bem-vindo ao guia interativo de higiene e saúde! Clique em Avançar para descobrir as práticas essenciais para manipulação segura dos alimentos.",
  };

  // Dados para a imagem interativa
  const interactiveData = {
    image: higieneImg, // A imagem que você importou
    points: [
      { id: 'hands', top: '49%', left: '48%', label: 'Higiene pessoal', text: 'Diariamente, tome banho, mantenha unhas curtas e limpas, use uniforme completo e retire adornos. Lave as mãos frequentemente: antes de começar, após usar o banheiro, tossir ou manusear lixo.' },
      { id: 'uniform', top: '65%', left: '65%', label: 'Uso do Uniforme', text: 'O uniforme deve estar sempre limpo e em bom estado. Evite usá-lo fora da área de manipulação para não contaminar os alimentos.' },
      { id: 'hair', top: '13%', left: '62%', label: 'Comportamento no trabalho e treinamento', text: 'Em ambientes de trabalho, é fundamental seguir o POP de higiene: não fume, coma ou beba na área de preparo; evite falar em excesso e mantenha o ambiente organizado. Além disso, participe de capacitações regulares e siga sempre as orientações da empresa.' },
      { id: 'health', top: '32%', left: '72%', label: 'Saúde do manipulador', text: 'Realize exames médicos periódicos. Se tiver sintomas como febre, diarreia, ou feridas, avise imediatamente e não manipule alimentos.' },
      { id: 'soap', top: '32%', left: '23%', label: '- Responsáveis', text: 'O supervisor deve monitorar a higiene e a conduta dos manipuladores, além de registrar treinamentos, afastamentos por questões de saúde e outras não conformidades.' },
    ]
  };

  const handleAdvance = () => {
    setCurrentStep('image');
  };

  return (
    <main className={styles.slideContentContainer}>
      <h2 className={styles.pageTitle}>POP 2: Higiene e Saúde do Manipulador</h2>

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
        <div>
          <div className={styles.interactiveImageWrapper}>
            {interactiveData.image && <img src={interactiveData.image} alt="Pontos de Higiene" className={styles.interactiveImage} />}

            {interactiveData.points.map((point) => (
              <div key={point.id} className={styles.hotspot} style={{ top: point.top, left: point.left }}>
                <span className={styles.hotspotLabel}>{point.label}</span>
                <div className={styles.hotspotTooltip}>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default HigieneSaudePage;