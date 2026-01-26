import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Product';
import Website from './Website';

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website/>} />
        <Route path="/daycare" element={<Product />} />
        {/* Optional: Add a catch-all route */}
        <Route path="*" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;