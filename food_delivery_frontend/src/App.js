import React from 'react';
import './App.css';
import LoginPage from './LoginPage';
import OnlineFoodLogo from './OnlineFoodLogo';

// PUBLIC_INTERFACE
function App() {
  // App logo at the top, with space, followed by main page
  return (
    <div className="App" style={{ minHeight: "100vh", padding: 0, margin: 0 }}>
      <header
        style={{
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "28px",
          paddingBottom: "12px",
        }}
      >
        <OnlineFoodLogo size={80} />
      </header>
      <LoginPage />
    </div>
  );
}

export default App;
