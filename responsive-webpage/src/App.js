import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Recruitment from './pages/Recruitment';
import Schedule from './pages/Schedule';
import Department from './pages/Department';
import Employees from './pages/Employees';
import Settings from './pages/Settings';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/department" element={<Department />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
