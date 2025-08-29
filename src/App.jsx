import React, { useState } from 'react';
import styles from './App.module.css';
import { Home as HomeIcon, Utensils, Droplet, Hand, Wrench, AlertTriangle, Box, Package, ClipboardList } from 'lucide-react';

import HigieneInstalacoesPage from './HigieneInstalacoesPage.jsx';
import HigieneSaudePage from './HigieneSaudePage.jsx';
import ControleAguaPage from './ControleAguaPage.jsx';
import ManejoResiduosPage from './ManejoResiduosPage.jsx';
import ManutencaoPage from './ManutencaoPage.jsx';
import PragasPage from './PragasPage.jsx';
import SelecaoPage from './SelecaoPage.jsx';
import RecolhimentoPage from './RecolhimentoPage.jsx';

// Dados dos botões para os 8 POPs, conforme o documento
const popsData = [
  { icon: <Utensils size={48} />, title: "POP 1: Higiene de Instalações, Equipamentos, Móveis e Utensílios", description: "Limpeza, desinfecção e manutenção de ambientes e ferramentas.", colorClass: styles.popsBtnGreen, page: 'pop1-higiene' },
  { icon: <Droplet size={48} />, title: "POP 2: Controle da Potabilidade da Água", description: "Garantir a qualidade da água para consumo e preparo.", colorClass: styles.popsBtnGreen, page: 'pop2-agua', image: null },
  { icon: <Hand size={48} />, title: "POP 3: Higiene e Saúde dos Manipuladores", description: "Hábitos de higiene e saúde pessoal no trabalho.", colorClass: styles.popsBtnGreen, page: 'pop3-higiene-manipuladores', image: null },
  { icon: <Box size={48} />, title: "POP 4: Manejo de Resíduos", description: "Coleta, separação e descarte correto do lixo.", colorClass: styles.popsBtnGreen, page: 'pop4-residuos', image: null },
  { icon: <Wrench size={48} />, title: "POP 5: Manutenção Preventiva e Calibração de Equipamentos", description: "Garantir funcionamento, segurança e precisão dos equipamentos.", colorClass: styles.popsBtnGreen, page: 'pop5-manutencao', image: null }, // Corrigido
  { icon: <AlertTriangle size={48} />, title: "POP 6: Controle Integrado de Vetores e Pragas Urbanas", description: "Prevenir e controlar insetos e roedores no ambiente.", colorClass: styles.popsBtnGreen, page: 'pop6-pragas', image: null }, // Corrigido
  { icon: <Package size={48} />, title: "POP 7: Seleção de Matérias-Primas, Ingredientes e Embalagens", description: "Critérios de escolha e recebimento de insumos seguros.", colorClass: styles.popsBtnGreen, page: 'pop7-selecao', image: null }, // Adicionado
  { icon: <ClipboardList size={48} />, title: "POP 8: Programa de Recolhimento de Alimentos", description: "Retirar do mercado produtos com risco à saúde do consumidor.", colorClass: styles.popsBtnGreen, page: 'pop8-recolhimento', image: null }, // Adicionado
];

const Header = ({ onHomeClick }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>GastroNet</h1>
    <button onClick={onHomeClick} className={styles.homeBtn}>
      <HomeIcon size={20} />
      <span>Página Inicial</span>
    </button>
  </header>
);

const Footer = () => (
  <footer className={styles.footer}>
    <p>© 2025 GastroNet. Todos os direitos reservados.</p>
    <p>Versão 1.0.0</p>
  </footer>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const HomePageContent = () => (
    <main className={styles.mainContent}>
      <h2 className={styles.pageTitle}>Bem-vindo(a) ao GastroNet</h2>
      <p className={styles.introText}>
        Esta plataforma interativa é um projeto dos alunos de Gastronomia do Senac,
        dedicada a auxiliar estabelecimentos do setor a aplicar as normas de segurança alimentar
        e boas práticas na cozinha. Explore as ferramentas desenvolvidas pelas equipes!
      </p>
      <div className={styles.popsGrid}>
        {popsData.map((pop, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(pop.page)}
            className={`${styles.popsBtn} ${pop.colorClass}`}
          >
            {pop.image ? <img src={pop.image} alt={pop.title} className={styles.popsBtnImage} /> : <div className={styles.icon}>{pop.icon}</div>}
            <span className={styles.btnTitle}>{pop.title}</span>
            <p className={styles.btnDescription}>{pop.description}</p>
          </button>
        ))}
      </div>
    </main>
  );

  const renderPageContent = () => {
  switch (currentPage) {
    case 'home':
      return <HomePageContent />;
    case 'pop1-higiene':
      return <HigieneInstalacoesPage />;
    case 'pop2-agua':
      return <ControleAguaPage />;
    case 'pop3-higiene-manipuladores':
      return <HigieneSaudePage />;
    case 'pop4-residuos':
      return <ManejoResiduosPage />;
    case 'pop5-manutencao':
      return <ManutencaoPage />; // Novo!
    case 'pop6-pragas':
      return <PragasPage />; // Novo!
    case 'pop7-selecao':
      return <SelecaoPage />; // Novo!
    case 'pop8-recolhimento':
      return <RecolhimentoPage />; // Novo!
    default:
      return <HomePageContent />;
  }
};

  return (
    <div className={styles.appContainer}>
      <Header onHomeClick={() => setCurrentPage('home')} />
      {renderPageContent()}
      <Footer />
    </div>
  );
};

export default App;