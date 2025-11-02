// RecolhimentoPage.jsx (CÓDIGO COMPLETO E REFATORADO)

import React, { useState } from 'react';
import styles from './App.module.css'; 

// Importa a imagem pop8.jpg da pasta src/assets
import pop8_infografico from './assets/pop8.png'; 


// Dados para os pontos interativos do POP 8 (Fluxograma de Ação)
const interactiveData = {
  image: pop8_infografico,
  points: [
    { 
      id: 1, 
      // Posição ajustada sobre o círculo "IDENTIFICAÇÃO DO PROBLEMA"
      top: '18%', left: '28%', 
      title: "1. 🔍 Identificação do Problema", 
      text: [
        "• Ações: Detectar a não conformidade (corpo estranho, contaminação ou rótulo errado) que pode gerar risco à saúde.",
        "• Regra: Ativar imediatamente o plano de recolhimento e notificar o gestor responsável."
      ]
    },
    { 
      id: 2, 
      // Posição ajustada sobre o círculo "COMUNICAÇÃO E ALERTA"
      top: '18%', left: '71%', 
      title: "2. 📞 Comunicação e Alerta", 
      text: [
        "• Ações: Entrar em contato com a **Vigilância Sanitária** e o fornecedor para informar e seguir orientações.",
        "• Regra: Informar o consumidor sobre o risco, orientar sobre a devolução e garantir a substituição ou reembolso."
      ]
    },
    { 
      id: 3, 
      // Posição ajustada sobre o círculo "RASTREABILIDADE E ISOLAMENTO"
      top: '45.5%', left: '27.9%', 
      title: "3. 🗺️ Rastreabilidade e Isolamento", 
      text: [
        "• Ações: Rastrear o lote afetado usando registros de produção e estoque.",
        "• Regra: **Isolar todos os produtos** desse lote em uma área segura, etiquetada como 'PRODUTO RECOLHIDO - IMPRÓPRIO PARA CONSUMO', para evitar uso acidental."
      ]
    },
    { 
      id: 4, 
      // Posição ajustada sobre o círculo "RECOLHIMENTO E ARMAZENAMENTO SEGURO"
      top: '45.5%', left: '70.5%', 
      title: "4. 🛒 Recolhimento e Armazenamento Seguro", 
      text: [
        "• Ações: Recolher fisicamente os produtos do ponto de venda/consumo.",
        "• Regra: Armazenar os produtos recolhidos de forma segura e separada até a destinação final."
      ]
    },
    { 
      id: 5, 
      // Posição ajustada sobre o círculo "DESTINO FINAL ADEQUADO"
      top: '72%', left: '27.9%', 
      title: "5. 🗑️ Destino Final Adequado", 
      text: [
        "• Ações: Dar um destino final adequado ao produto (descarte ou reprocessamento) conforme a orientação legal.",
        "• Regra: O descarte deve ser registrado e ter comprovação de que não houve risco ambiental."
      ]
    },
    { 
      id: 6, 
      // Posição ajustada sobre o círculo "DOCUMENTAÇÃO E TREINAMENTO"
      top: '72%', left: '70.5%', 
      title: "6. ✅ Documentação e Treinamento", 
      text: [
        "• Ações: Documentar todas as etapas do recolhimento, incluindo comunicação e destino final.",
        "• Regra: Realizar treinamentos e simulações com a equipe para testar e melhorar a eficiência do programa."
      ]
    },
  ]
};

const RecolhimentoPage = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handlePointClick = (pointId) => {
    const point = interactiveData.points.find(p => p.id === pointId);
    setSelectedPoint(point);
  };

  const handleCloseClick = (e) => {
    // Fecha o balão se clicar no wrapper da imagem
    if (e.target.className.includes('interactiveImageWrapper') || e.target.className.includes('interactiveImage')) {
      setSelectedPoint(null);
    }
  };

  return (
    <main className={styles.interactiveContainer}>
      <h2 className={styles.pageTitle}>POP 8: Programa de Recolhimento de Alimentos</h2>
      
      {/* Usando a classe global 'interactiveImageWrapper' do index.css */}
      <div className="interactiveImageWrapper" onClick={handleCloseClick}>
        <img src={interactiveData.image} alt="Fluxograma de Recolhimento de Alimentos" className="interactiveImage" />

        {interactiveData.points.map(point => (
          <div
            key={point.id}
            // A classe 'hotspot' deve estar definida no seu App.module.css para o estilo do círculo
            className={styles.hotspot} 
            style={{ 
              top: point.top, 
              left: point.left,
              // Estilos que garantem que o hotspot seja um círculo centralizado
              backgroundColor: selectedPoint && selectedPoint.id === point.id ? 'var(--accent-color, #ff6347)' : 'var(--primary-color, #007bff)',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              border: '3px solid white',
              width: '30px', // Tamanho padrão do círculo
              height: '30px', // Tamanho padrão do círculo
              cursor: 'pointer',
              zIndex: 10
            }}
            onClick={(e) => {
              e.stopPropagation(); 
              handlePointClick(point.id);
            }}
          >
            <span className={styles.hotspotNumber}>{point.id}</span>
          </div>
        ))}
      </div>

      {selectedPoint && (
        // A classe 'hotspotTextContainer' deve estar definida no seu App.module.css
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

export default RecolhimentoPage;