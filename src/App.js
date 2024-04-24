import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import logo from './images/hwy420logo.png';
import LoginPage from './LoginPage';
import HomePage from './HomePage'; // Ensure HomePage is correctly implemented

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    // Simulated login logic; replace with actual validation
    console.log('User logged in with:', username);
    setIsAuthenticated(true); // Set authenticated to true on successful login
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="HWY 420 Logo" />
              <p>Welcome to your HWY420 Company Portal</p>
              <Link to="/login"><button>Enter</button></Link>
            </header>
          </div>
        } />
        <Route path="/login" element={
          isAuthenticated ? <Navigate replace to="/" /> : <LoginPage onLogin={handleLogin} />
        } />
        <Route path="/home" element={
          isAuthenticated ? <HomePage /> : <Navigate replace to="/login" />
        } />
      </Routes>
    </Router>
  );
}

export default App;
