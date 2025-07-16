import React from 'react';

function Playground() {
  return (
    <div data-testid="playground">
      <h2>PlayGround</h2> {/* ✅ Cypress is looking for this exact text */}
      <p>This is a protected route.</p>
    </div>
  );
}

export default Playground;
