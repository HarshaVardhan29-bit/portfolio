import React from 'react';
import Header from './components/Header';
import HeroWithOrbit from './components/HeroWithOrbit';
import Philosophy from './components/Philosophy';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App dark">
      <Header />
      <HeroWithOrbit />
      <Philosophy />
      <TechStack />
      <Projects />
      <History />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
