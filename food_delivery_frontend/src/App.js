import React from 'react';
import './App.css';
import LoginPage from './LoginPage';

// PUBLIC_INTERFACE
function App() {
  // We use root App only to swap the main page as needed.
  return (
    <div className="App" style={{ minHeight: "100vh", padding: 0, margin: 0 }}>
      <LoginPage />
    </div>
  );
}

export default App;
