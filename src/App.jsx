import React, { useState } from 'react';
import styles from './App.module.css';
import { Home as HomeIcon, LayoutDashboard, FileText, Image, BookOpen, Utensils, Handshake } from 'lucide-react';
// importe das imagens (substitua pelos caminhos corretos ou URLs)//
import slide1_img from './assets/img1-btn1.png';

// Dados dos botões para os 6 POPs
const popsData = [
  { icon: <BookOpen size={48} />, title: "POP 1: Boas Práticas de Fabricação", description: "Procedimentos de higiene e manipulação.", colorClass: styles.popsBtnGreen, page: 'boas-praticas', image: null },
  { icon: <FileText size={48} />, title: "POP 2: Higiene e Saúde do Manipulador", description: "Higiene pessoal e exames médicos.", colorClass: styles.popsBtnGreen, page: 'higiene-saude', image: null },
  { icon: <Utensils size={48} />, title: "POP 3: Higienização de Utensílios e Equipamentos", description: "Procedimentos de limpeza da cozinha.", colorClass: styles.popsBtnGreen, page: 'higienizacao', image: null },
  { icon: <Image size={48} />, title: "POP 4: Controle de Pragas", description: "Prevenção e controle de animais.", colorClass: styles.popsBtnGreen, page: 'controle-pragas', image: null },
  { icon: <Handshake size={48} />, title: "POP 5: Coleta de Amostras", description: "Como coletar e armazenar amostras.", colorClass: styles.popsBtnGreen, page: 'coleta-amostras', image: null },
  { icon: <LayoutDashboard size={48} />, title: "POP 6: Manutenção Preventiva", description: "Checklists para equipamentos.", colorClass: styles.popsBtnGreen, page: 'manutencao-preventiva', image: null },
];

// Dados para o POP 1: Boas Práticas de Fabricação
const boasPraticasData = [
  {
    title: "1. Condições e Ambiente",
    text: "O ambiente de trabalho deve ser limpo e organizado. O piso, as paredes e o teto devem ser lisos, impermeáveis e fáceis de limpar. Mantenha as lixeiras sempre fechadas e em bom estado de conservação.",
    image: slide1_img,
  },
  {
    title: "2. Higienização das Mãos",
    text: "Lave as mãos frequentemente com água e sabão. Use papel toalha para secar as mãos e fechar a torneira, evitando contaminação cruzada. Use álcool 70% após a lavagem para uma desinfecção completa.",
    image: null,
  },
  {
    title: "3. Uso de EPIs",
    text: "Use equipamentos de proteção individual (EPIs) limpos, como toucas, luvas, máscaras e aventais. Isso protege tanto o alimento quanto o manipulador, prevenindo contaminações.",
    image: null,
  },
];

// Componente para a página de Boas Práticas de Fabricação
const BoasPraticasPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide < boasPraticasData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = boasPraticasData[currentSlide];

  return (
    <main className={styles.slideContentContainer}>
      <h2 className={styles.pageTitle}>POP 1: Boas Práticas de Fabricação</h2>
      <div key={currentSlide} className={styles.slideCard}>
        {slide.image ? <img src={slide.image} alt={slide.title} className={styles.slideImage} /> : <div className={styles.icon}><Image size={48} /></div>}
        <h3>{slide.title}</h3>
        <p>{slide.text}</p>
      </div>

      <div className={styles.navigation}>
        <button onClick={handlePreviousSlide} disabled={currentSlide === 0}>
          Anterior
        </button>
        <span>{currentSlide + 1} / {boasPraticasData.length}</span>
        <button onClick={handleNextSlide} disabled={currentSlide === boasPraticasData.length - 1}>
          Próximo
        </button>
      </div>
    </main>
  );
};

// Componente principal da aplicação
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const Header = () => (
    <header className={styles.header}>
      <h1 className={styles.title}>GastroNet</h1>
      <button onClick={() => setCurrentPage('home')} className={styles.homeBtn}>
        <HomeIcon size={20} />
        <span>Início</span>
      </button>
    </header>
  );

  const Footer = () => (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} GastroNet. Todos os direitos reservados.</p>
      <p>Versão 1.0.0</p>
    </footer>
  );

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
      case 'boas-praticas':
        return <BoasPraticasPage />;
      default:
        return <HomePageContent />;
    }
  };

  return (
    <div className={styles.appContainer}>
      <Header />
      {renderPageContent()}
      <Footer />
    </div>
  );
}

export default App;