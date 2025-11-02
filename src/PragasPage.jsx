// PragasPage.jsx

import React, { useState } from 'react';
import styles from './App.module.css'; 

// Importe a imagem principal para este POP. Ajuste o caminho conforme onde você salvou a imagem.
// Ex: Se estiver em 'src/assets/', use './assets/pop6.jpg'
import pop6_infografico from './assets/pop6.png'; // Assumindo que está em public/assets/pop6.jpg

// Dados para os pontos interativos do POP 6
const interactiveData = {
  image: pop6_infografico,
  points: [
    { 
      id: 1, 
      // Cobre o quadrante superior esquerdo (limpeza)
      top: '0%', left: '0%', width: '50%', height: '50%', 
      title: "🧹 Boas Práticas de Higiene e Limpeza", 
      text: [
        "• Manter a cozinha sempre limpa e organizada, varrendo e limpando o chão e as superfícies de trabalho.",
        "• Remover o lixo regularmente para evitar acúmulo de resíduos orgânicos que atraem pragas.",
        "• Higienizar equipamentos e utensílios após o uso."
      ]
    },
    { 
      id: 2, 
      // Cobre o quadrante superior direito (barreiras físicas)
      top: '0%', left: '50%', width: '50%', height: '50%', 
      title: "🚧 Barreiras Físicas e Vedação", 
      text: [
        "• Instalar telas nas janelas e portas para impedir a entrada de insetos voadores.",
        "• Vedar frestas e buracos em paredes, pisos e tetos que possam servir de abrigo ou passagem para pragas.",
        "• Manter portas e janelas fechadas sempre que possível."
      ]
    },
    { 
      id: 3, 
      // Cobre o quadrante inferior esquerdo (sinais de infestação)
      top: '50%', left: '0%', width: '50%', height: '50%', 
      title: "🔍 Monitoramento e Identificação de Sinais de Pragas", 
      text: [
        "• Inspecionar regularmente a cozinha em busca de sinais de roedores (fezes, embalagens roídas) e insetos (ovos, rastros, carcaças).",
        "• Implementar armadilhas e iscas de forma estratégica para monitorar a presença de pragas.",
        "• Agir rapidamente ao menor sinal de infestação."
      ]
    },
    { 
      id: 4, 
      // Cobre o quadrante inferior direito (controle profissional)
      top: '50%', left: '50%', width: '50%', height: '50%', 
      title: "👨‍ professional Controle Profissional e Prevenção", 
      text: [
        "• Contratar empresas especializadas em controle de pragas (dedetização) com licença sanitária.",
        "• Realizar tratamentos preventivos periódicos conforme a necessidade e regulamentação local.",
        "• Manter registros dos serviços de controle de pragas."
      ]
    },
  ]
};

const PragasPage = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handlePointClick = (pointId) => {
    const point = interactiveData.points.find(p => p.id === pointId);
    setSelectedPoint(point);
  };

  return (
    <main className={styles.interactiveContainer}>
      <h2 className={styles.pageTitle}>POP 6: Controle Integrado de Pragas</h2>
      
      <div className={styles.interactiveImageWrapper}>
        <img src={interactiveData.image} alt="Infográfico de Controle de Pragas" className={styles.interactiveImage} />

        {interactiveData.points.map(point => (
          <div
            key={point.id}
            // Usamos a mesma classe hotspot, mas os estilos de 'width' e 'height' virão do style inline
            className="hotspot" 
            style={{ 
              top: point.top, 
              left: point.left, 
              width: point.width, 
              height: point.height,
              // Ajustes para que o hotspot cubra todo o quadrante e não tenha o círculo
              borderRadius: '0', // Remove o arredondamento
              backgroundColor: 'rgba(0,0,0,0)', // Transparente
              border: 'none', // Remove a borda
              transform: 'none', // Remove a translação de centralização
              cursor: 'pointer',
              zIndex: 5 // Garante que esteja acima da imagem
            }}
            onClick={() => handlePointClick(point.id)}
            // Adiciona um hover visual para indicar que é clicável
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.2)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0)'}
          >
            {/* Não renderizamos o número dentro do hotspot neste caso */}
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

export default PragasPage;