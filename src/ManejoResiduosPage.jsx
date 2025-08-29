import React, { useState } from 'react';
import styles from './App.module.css';
import { ArrowLeft } from 'lucide-react';
import pop4_lixo from './assets/pop4-lixo.png'; // Importe a imagem que você já tem

const ManejoResiduosPage = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [selectedPoint, setSelectedPoint] = useState(null);

  const introData = {
    title: "♻️ POP 4: Manejo de Resíduos",
    text: "O descarte incorreto de lixo pode contaminar alimentos e o ambiente. Aprenda a separar, coletar e higienizar resíduos para manter a segurança do seu estabelecimento.",
  };

  const interactiveData = {
    image: pop4_lixo,
    points: [
      { id: 1, top: '12%', left: '23%', title: "Tipos de resíduos", text: [
        "Orgânicos: restos de alimentos, cascas, ossos.",
        "Recicláveis: plástico, vidro, papel, metal.",
        "Comuns: embalagens sujas, guardanapos, papel-toalha.",
        "Perigosos/químicos: produtos de limpeza vencidos ou contaminados."
      ]},
      { id: 2, top: '12%', left: '59%', title: "Coleta e separação", text: [
        "Usar lixeiras com pedal, tampadas e de fácil limpeza.",
        "Forrar as lixeiras com sacos plásticos resistentes.",
        "Identificar por cor: Verde (vidro), Azul (papel), Vermelho (plástico), Amarelo (metal), Marrom (orgânicos), Preto (gerais).",
        "Não misturar recicláveis com orgânicos."
      ]},
      { id: 3, top: '12%', left: '94.5%', title: "Higienização das lixeiras", text: [
        "Esvaziar sempre que estiverem 2/3 cheias.",
        "Lavar e desinfetar diariamente.",
        "Manter tampadas e em bom estado de conservação."
      ]},
      { id: 4, top: '59%', left: '23%', title: "Armazenamento temporário", text: [
        "Guardar os sacos de lixo em local externo, limpo, coberto e ventilado.",
        "Evitar acúmulo e mau cheiro."
      ]},
      { id: 5, top: '59%', left: '59%', title: "Coleta externa", text: [
        "Respeitar os dias e horários da coleta pública ou de empresa contratada.",
        "Não descartar resíduos de forma irregular no ambiente."
      ]},
      { id: 6, top: '59%', left: '94.5%', title: "Responsáveis", text: [
        "Definir quem recolhe, separa e higieniza as lixeiras.",
        "Registrar frequência e responsável em planilha/check-list."
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
          <h3>POP 4: Manejo de Resíduos</h3>
          <p>{introData.text}</p>
          <div className={styles.navigation}>
            <button onClick={handleAdvance}>Avançar</button>
          </div>
        </div>
      )}

      {currentStep === 'image' && (
        <>

          <div className={styles.interactiveImageWrapper}>
            {interactiveData.image && <img src={interactiveData.image} alt="Infográfico de Manejo de Resíduos" className={styles.interactiveImage} />}
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

export default ManejoResiduosPage;