// ROOT COMPONENT - App.jsx
// Lab 4: Client-side routing 
// Lab 4: Two navigable pages/screens 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page 1 - Login */}
        <Route path="/" element={<LoginPage />} />
        {/* Page 2 - Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;