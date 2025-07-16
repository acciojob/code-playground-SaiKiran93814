import React from 'react';

function Playground() {
  return (
    // ✅ Added data-testid so Cypress can verify protected page
    <div data-testid="playground">
      <h2>Welcome to Playground</h2>
      <p>This is a protected route.</p>
    </div>
  );
}

export default Playground;
