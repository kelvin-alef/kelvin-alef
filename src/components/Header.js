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
            <li><a href="#about">About</a></li>
            <li><a href="#success-cases">Success Cases</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
