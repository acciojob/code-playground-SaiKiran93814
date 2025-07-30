import React from 'react';

function LoginPage({ isAuthenticated, setIsAuthenticated }) {
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div data-testid="login-page">
      <h3>Login</h3>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Log Out</button>  // ✅ Plain button for Cypress
      ) : (
        <button onClick={handleLogin}>Log In</button>     // ✅ Plain button for Cypress
      )}
    </div>
  );
}

export default LoginPage;
