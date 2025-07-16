import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Playground from "../src/Pages/Playground.js";
import LoginPage from './Pages/LoginPage.js';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      <div>
        {isAuthenticated ? (
          <p>Logged in, Now you can enter Playground</p>
        ) : (
          <p>You are not authenticated, Please login first</p>
        )}

        <ul>
          <li><Link to="/playground">PlayGround</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>

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
      </Routes>
    </div>
  );
}

export default App;
