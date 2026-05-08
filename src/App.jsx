import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Drivers from './pages/Drivers';
import Rides from './pages/Rides';
import Analytics from './pages/Analytics';
import Support from './pages/Support';

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
        <Route element={<DashboardLayout title="Ringkasan Sistem" />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/drivers" element={
          <div className="dashboard-container">
            <Sidebar />
            <main className="main-content">
              <Header title="Manajemen Pengemudi" />
              <Drivers />
            </main>
          </div>
        } />

        <Route path="/rides" element={
          <div className="dashboard-container">
            <Sidebar />
            <main className="main-content">
              <Header title="Riwayat Perjalanan" />
              <Rides />
            </main>
          </div>
        } />

        <Route path="/analytics" element={
          <div className="dashboard-container">
            <Sidebar />
            <main className="main-content">
              <Header title="Analitik & Laporan" />
              <Analytics />
            </main>
          </div>
        } />

        <Route path="/support" element={
          <div className="dashboard-container">
            <Sidebar />
            <main className="main-content">
              <Header title="Pusat Dukungan" />
              <Support />
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
