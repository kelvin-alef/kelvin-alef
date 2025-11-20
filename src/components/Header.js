import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Header.css';

function Header() {
  const [isTitleDone, setIsTitleDone] = useState(false);

  const [text] = useTypewriter({
    words: ['Kelvin Alef'],
    loop: 1,
    typeSpeed: 120,
    onLoopDone: () => setIsTitleDone(true),
  });

  const [subText] = useTypewriter({
    words: ['Site Reliability Engineer | DevOps Engineer | Senior Java Developer'],
    loop: 1,
    typeSpeed: 120,
  });

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="title-container">
          <h1>
            <span className="title-text">{text}</span>
            {!isTitleDone && <Cursor cursorStyle='|' />}
          </h1>
          <h2>
            {isTitleDone && (
              <>
                <span className="subtitle-text">{subText}</span>
                <Cursor cursorStyle='_' />
              </>
            )}
          </h2>
        </div>
        <nav>
          <ul>
            <li><a href="#about" className="resume-button">About</a></li>
            <li><a href="#success-cases" className="resume-button">Success Cases</a></li>
            <li><a href="#skills" className="resume-button">Skills</a></li>
            <li><a href="#contact" className="resume-button">Contact</a></li>
            <li><a href="/kelvin-alef/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">Download Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
