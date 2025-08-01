import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import OnlineFoodLogo from './OnlineFoodLogo';

// PUBLIC_INTERFACE
function App() {
  // Header: modern responsive logo bar at top, centered, with padding and visual balance
  return (
    <div className="App" style={{ minHeight: "100vh", padding: 0, margin: 0 }}>
      <header className="top-app-header">
        <div className="logo-header-inner">
          <OnlineFoodLogo className="main-app-logo" />
        </div>
      </header>
      <LoginPage />
    </div>
  );
}

export default App;
