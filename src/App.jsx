import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Product';
import Website from './Website';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website/>} />
        <Route path="/daycare" element={<Product />} />
        <Route path="*" element={<Product />} />
      </Routes>
    </Router>
  );
}


export default App;
