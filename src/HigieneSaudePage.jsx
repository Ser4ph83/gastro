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
      { id: 'hands', top: '49%', left: '48%', label: 'Higienização das Mãos', text: 'As mãos devem ser lavadas e higienizadas com frequência, especialmente antes e após a manipulação de alimentos, após usar o banheiro, etc.' },
      { id: 'uniform', top: '65%', left: '65%', label: 'Uso do Uniforme', text: 'O uniforme deve estar sempre limpo e em bom estado. Evite usá-lo fora da área de manipulação para não contaminar os alimentos.' },
      { id: 'hair', top: '13%', left: '62%', label: 'Cabelos Presos', text: 'Use toucas ou redes de cabelo para evitar a queda de fios nos alimentos. A barba também deve ser protegida.' },
      { id: 'health', top: '32%', left: '72%', label: 'Saúde e Exames', text: 'É fundamental que o manipulador faça exames médicos periódicos e comunique qualquer sintoma de doença para a chefia.' },
      { id: 'soap', top: '32%', left: '23%', label: 'Dispensers de Sabão', text: 'Os dispensers de sabão devem estar sempre abastecidos com sabão líquido adequado para uso humano, dentro do prazo de validade e com as especificações corretas.' },
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
          <button onClick={() => setCurrentStep('intro')} className={styles.navigationButton}>
            <ArrowLeft size={20} /> Voltar para a introdução
          </button>

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