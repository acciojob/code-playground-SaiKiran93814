import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.js';
import Playground from "../src/Pages/Playground.js";
import PrivateRoute from './components/PrivateRoute'; // Make sure this is the fixed version below

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/playground">PlayGround</Link></li>
        </ul>
      </nav>

      {/* Status for Cypress test */}
      <p data-testid="status-msg">
        {isAuthenticated
          ? 'Logged in, Now you can enter Playground'
          : 'You are not authenticated, Please login first'}
      </p>

      <Routes>
        <Route
          path="/playground"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Playground />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
