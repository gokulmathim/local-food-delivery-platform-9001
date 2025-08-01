import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [logoError, setLogoError] = useState(false);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {!logoError ? (
          <img 
            src={logo} 
            className="App-logo" 
            alt="Food Delivery Logo" 
            onError={() => setLogoError(true)} 
            style={{ background: 'var(--logo-bg, #cfe5e2)' }}
          />
        ) : (
          <div style={{
            width: '40vmin',
            height: '40vmin',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a05a26',
            fontWeight: 700,
            fontSize: '2rem',
            background: '#eee',
            borderRadius: 16,
            border: '2px dashed #a05a26'
          }}>
            Logo failed to load
          </div>
        )}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
