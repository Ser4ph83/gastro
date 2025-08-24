import React from 'react';
import styles from './App.module.css'; // Importa os estilos do módulo CSS
import { Home as HomeIcon, LayoutDashboard, FileText, Image, BookOpen, Utensils, Handshake } from 'lucide-react';

// Dados dos botões para os 6 POPs
const popsData = [
  { icon: <BookOpen size={48} />, title: "POP 1: Boas Práticas de Fabricação", description: "Procedimentos de higiene e manipulação.", colorClass: styles.popsBtnGreen },
  { icon: <FileText size={48} />, title: "POP 2: Higiene e Saúde do Manipulador", description: "Higiene pessoal e exames médicos.", colorClass: styles.popsBtnGreen },
  { icon: <Utensils size={48} />, title: "POP 3: Higienização de Utensílios e Equipamentos", description: "Procedimentos de limpeza da cozinha.", colorClass: styles.popsBtnGreen },
  { icon: <Image size={48} />, title: "POP 4: Controle de Pragas", description: "Prevenção e controle de animais.", colorClass: styles.popsBtnGreen },
  { icon: <Handshake size={48} />, title: "POP 5: Coleta de Amostras", description: "Como coletar e armazenar amostras.", colorClass: styles.popsBtnGreen },
  { icon: <LayoutDashboard size={48} />, title: "POP 6: Manutenção Preventiva", description: "Checklists para equipamentos.", colorClass: styles.popsBtnGreen },
];

function App() {
  const Header = () => (
    <header className={styles.header}>
      <h1 className={styles.title}>GastroNet</h1>
      <button className={styles.homeBtn}>
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
            className={`${styles.popsBtn} ${pop.colorClass}`}
          >
            <div className={styles.icon}>{pop.icon}</div>
            <span className={styles.btnTitle}>{pop.title}</span>
            <p className={styles.btnDescription}>{pop.description}</p>
          </button>
        ))}
      </div>
    </main>
  );

  return (
    <div className={styles.appContainer}>
      <Header />
      <HomePageContent />
      <Footer />
    </div>
  );
}

export default App;