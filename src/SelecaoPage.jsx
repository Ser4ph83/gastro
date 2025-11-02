// SelecaoPage.jsx (CÓDIGO COMPLETO E REFATORADO)

import React, { useState } from 'react';
import styles from './App.module.css'; 

// Importação da imagem. Ajustado para o caminho e nome de arquivo informados.
import pop7_infografico from './assets/pop7.png'; 


// Dados para os pontos interativos do POP 7
const interactiveData = {
  image: pop7_infografico,
  points: [
    { 
      id: 1, 
      // Cobre o quadrante superior esquerdo (Recebimento/Inspeção Inicial)
      top: '15%', left: '4%', width: '44%', height: '37%', 
      title: "🔎 Inspeção e Integridade da Matéria-Prima", 
      text: [
        "• Conferir a **integridade** das embalagens (latas não amassadas, sacos sem rasgos, caixas secas).",
        "• Verificar as **condições físicas** e sensoriais do produto: cor, cheiro, textura e temperatura na hora do recebimento.",
        "• Rejeitar produtos que não estejam na temperatura correta (ex: congelados acima de -12°C ou refrigerados acima de 5°C)."
      ]
    },
    { 
      id: 2, 
      // Cobre o quadrante superior direito (Conferência de Documentos)
      top: '15%', left: '52%', width: '44%', height: '37%', 
      title: "📄 Documentação e Procedência", 
      text: [
        "• Exigir a **Nota Fiscal** ou o documento de entrega e conferir se corresponde ao pedido.",
        "• Verificar se o produto tem o selo de inspeção oficial (SIF, SIM ou SISBI) para carnes, pescados, leite e ovos.",
        "• Confirmar a **validade** do produto e que ele está dentro do prazo de consumo."
      ]
    },
    { 
      id: 3, 
      // Cobre o quadrante inferior esquerdo (Manuseio e Descarte de Embalagem)
      top: '54%', left: '4%', width: '44%', height: '43%', 
      title: "📦 Manuseio e Higienização de Embalagens", 
      text: [
        "• Retirar e descartar embalagens secundárias (caixas de papelão, sacos externos) na área de recebimento.",
        "• Fazer uma **limpeza inicial** em embalagens primárias que entrarão na área de preparo (ex: latas e vidros).",
        "• Não permitir que embalagens sujas ou danificadas entrem em contato com superfícies limpas ou alimentos."
      ]
    },
    { 
      id: 4, 
      // Cobre o quadrante inferior direito (Armazenamento e PEPS)
      top: '54%', left: '52%', width: '44%', height: '43%', 
      title: "🛒 Armazenamento Imediato (PEPS)", 
      text: [
        "• Armazenar o produto imediatamente após o recebimento em sua temperatura ideal (seco, refrigerado ou congelado).",
        "• Aplicar o sistema **PEPS** (Primeiro que Entra, Primeiro que Sai), colocando os produtos novos atrás ou abaixo dos mais antigos.",
        "• Garantir que os produtos estejam em prateleiras, longe do chão e separados de produtos de limpeza."
      ]
    },
  ]
};

const SelecaoPage = () => {
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
      <h2 className={styles.pageTitle}>POP 7: Seleção de Matérias-Primas, Ingredientes e Embalagens</h2>
      
      {/* Usando a classe global 'interactiveImageWrapper' do index.css */}
      <div className="interactiveImageWrapper" onClick={handleCloseClick}>
        <img src={interactiveData.image} alt="Infográfico de Seleção de Matérias-Primas" className="interactiveImage" />

        {interactiveData.points.map(point => (
          <div
            key={point.id}
            className="hotspot" 
            style={{ 
              top: point.top, 
              left: point.left, 
              width: point.width, 
              height: point.height,
              // Estilos para transformá-lo em um quadrante transparente
              borderRadius: '0', 
              backgroundColor: selectedPoint && selectedPoint.id === point.id ? 'rgba(255, 165, 0, 0.3)' : 'rgba(0,0,0,0)', // Destaque em Laranja
              border: 'none', 
              transform: 'none',
              cursor: 'pointer',
              zIndex: 5, 
              transition: 'background-color 0.3s'
            }}
            onClick={(e) => {
              e.stopPropagation(); 
              handlePointClick(point.id);
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 165, 0, 0.2)'}
            onMouseLeave={e => {
              if (!(selectedPoint && selectedPoint.id === point.id)) {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0)';
              }
            }}
          >
            {/* Quadrante é invisível, sem número */}
          </div>
        ))}
      </div>

      {selectedPoint && (
        <div className="hotspotTextContainer">
          <h3 className="hotspotTitle">{selectedPoint.title}</h3>
          <div className="hotspotText">
            {selectedPoint.text.map((line, index) => (
              <p key={index} className="hotspotParagraph">{line}</p>
            ))}
            <button 
              className="closeHotspotBtn" 
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

export default SelecaoPage;