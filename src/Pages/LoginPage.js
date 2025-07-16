import React from 'react';

function LoginPage({ isAuthenticated, setIsAuthenticated }) {
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <h3>Login</h3>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  );
}

export default LoginPage;
