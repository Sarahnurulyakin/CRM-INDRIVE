import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Drivers from './pages/Drivers';
import Helpdesk from './pages/Helpdesk';
import Complaints from './pages/Complaints';
import Satisfaction from './pages/Satisfaction';
import Loyalty from './pages/Loyalty';
import AIInsight from './pages/AIInsight';
import Reports from './pages/Reports';

// Layout untuk Dashboard
const DashboardLayout = ({ title }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header title={title} />
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Pembuka */}
        <Route path="/" element={<LandingPage />} />

        {/* Halaman Aplikasi (Dashboard) */}
        <Route element={<DashboardLayout title="CRM inDrive - Manajemen Sistem" />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/helpdesk" element={<Helpdesk />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/satisfaction" element={<Satisfaction />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/ai-insight" element={<AIInsight />} />
          <Route path="/reports" element={<Reports />} />
        </Route>

        <Route path="/drivers" element={
          <div className="dashboard-container">
            <Sidebar />
            <main className="main-content">
              <Header title="Manajemen Driver & Merchant" />
              <Drivers />
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
