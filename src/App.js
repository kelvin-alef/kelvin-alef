import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import SuccessCases from './components/SuccessCases';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <SuccessCases />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2025 Kelvin Alef. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;