// ROOT COMPONENT - App.jsx
// Lab 4: Client-side routing 
// Lab 4: Two navigable pages/screens 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page 1 - Login */}
        <Route path="/" element={<LoginPage />} />
        {/* Page 2 - Dashboard */}
        <Route path="/userdashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
