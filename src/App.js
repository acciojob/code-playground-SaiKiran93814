import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from "../src/Pages/LoginPage.js";
import Playground from './Pages/PlayGround.js';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      <nav>
        <Link to="/login">Login</Link> |{' '}
        <Link to="/playground">Code Playground</Link>
      </nav>

      <p>Status: {isAuthenticated ? 'Authenticated ✅' : 'Unauthenticated ❌'}</p>

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
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="*" element={<Navigate to="/playground" />} />
      </Routes>
    </div>
  );
}

export default App;
