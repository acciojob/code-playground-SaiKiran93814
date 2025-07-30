import React from 'react';

function LoginPage({ isAuthenticated, setIsAuthenticated }) {
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div data-testid="login-page">
      <h3>Login</h3>

      {/* ✅ Always render BOTH buttons, disable one based on auth */}
      <button 
        onClick={handleLogin} 
        disabled={isAuthenticated}
      >
        Log In
      </button>

      <button 
        onClick={handleLogout} 
        disabled={!isAuthenticated}
      >
        Log Out
      </button>
    </div>
  );
}

export default LoginPage;
