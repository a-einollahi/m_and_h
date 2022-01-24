import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/Index';
import Admin from './pages/admin/Index';

export default function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </React.StrictMode>
  );
}
