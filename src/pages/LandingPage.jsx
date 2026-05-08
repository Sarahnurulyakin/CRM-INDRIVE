import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Globe, Users } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="landing-nav fade-in">
        <div className="landing-logo">
          <div className="logo-icon">ID</div>
          <span>inDrive CRM</span>
        </div>
        <div className="nav-links">
          <a href="#features">Fitur</a>
          <a href="#about">Tentang</a>
          <button className="glass-btn-outline" onClick={() => navigate('/dashboard')}>Masuk Admin</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content fade-in">
          <span className="badge-promo">Baru: Versi 2.0 Sistem Manajemen</span>
          <h1>Kelola Masa Depan <span className="text-primary">Transportasi</span></h1>
          <p>Sistem Manajemen Hubungan Pelanggan dan Pengemudi tercanggih untuk ekosistem InDrive. Transparansi, efisiensi, dan kontrol penuh dalam satu genggaman.</p>
          
          <div className="hero-actions">
            <button className="glass-btn-large" onClick={() => navigate('/dashboard')}>
              Mulai Sekarang <ArrowRight size={20} />
            </button>
            <button className="glass-btn-text">Lihat Demo</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card main-visual glass-card">
            <div className="card-header">
              <div className="dots"><span></span><span></span><span></span></div>
            </div>
            <div className="card-content">
              <div className="skeleton-line long"></div>
              <div className="skeleton-line med"></div>
              <div className="skeleton-grid">
                <div className="skeleton-box"></div>
                <div className="skeleton-box"></div>
              </div>
            </div>
          </div>
          <div className="floating-blob"></div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="features-section">
        <h2 className="section-title">Mengapa Memilih inDrive CRM?</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon"><Shield size={24} /></div>
            <h3>Keamanan Data</h3>
            <p>Enkripsi tingkat tinggi untuk semua dokumen pengemudi dan data penumpang.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon"><Zap size={24} /></div>
            <h3>Real-time Tracking</h3>
            <p>Pantau setiap perjalanan dan negosiasi harga secara langsung tanpa delay.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon"><Users size={24} /></div>
            <h3>Manajemen Efisien</h3>
            <p>Kelola ribuan pengemudi dengan sistem verifikasi otomatis yang cerdas.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon"><Globe size={24} /></div>
            <h3>Analitik Global</h3>
            <p>Dapatkan laporan mendalam mengenai pertumbuhan bisnis di berbagai wilayah.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>© 2024 inDrive CRM System • Dibuat untuk Efisiensi Maksimal</p>
      </footer>
    </div>
  );
};

export default LandingPage;
