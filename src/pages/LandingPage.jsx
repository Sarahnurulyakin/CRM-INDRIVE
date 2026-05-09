import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Info, FileText, AlertTriangle, Activity, TrendingUp,
  Target, Zap, Shield, BookOpen, ChevronDown, X, Maximize2, MessageSquare
} from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [activePoint, setActivePoint] = useState(null);

  const comparisonData = [
    { indicator: 'Waktu Respon Keluhan', before: '12 jam', after: '1.8 jam', change: '72% lebih cepat' },
    { indicator: 'Penyelesaian Masalah (FCR)', before: '62%', after: '89%', change: '27% meningkat' },
    { indicator: 'Kepuasan (CSAT)', before: '3.6/5', after: '4.6/5', change: '28% meningkat' },
    { indicator: 'Pengguna Aktif (MAU)', before: '35jt', after: '46jt', change: '31% meningkat' },
    { indicator: 'Retensi Pelanggan', before: '28%', after: '39%', change: '11% meningkat' },
    { indicator: 'Keluhan per 1000 Trip', before: '18.7', after: '9.6', change: '48% menurun' },
    { indicator: 'Biaya Layanan (per kontak)', before: 'Rp 16.500', after: 'Rp 9.800', change: '41% menurun' },
  ];

  const casePoints = [
    {
      id: "01",
      title: "Latar Belakang",
      icon: <Info />,
      short: "Tantangan inDrive dalam menjaga kualitas layanan di tengah pertumbuhan pesat.",
      long: (
        <div className="modal-body-content">
          <p>Pertumbuhan pengguna inDrive yang masif menuntut sistem yang mampu mengelola jutaan interaksi secara personal dan efisien.</p>
          <p>Diperlukan sistem yang mampu mengelola data pelanggan secara terpusat untuk mendukung interaksi yang lebih baik dan meningkatkan kepuasan serta loyalitas pengguna.</p>
          <div className="highlight-box-premium">
            <strong>Fokus Utama:</strong> Sentralisasi data dan efisiensi komunikasi operasional demi transparansi harga.
          </div>
        </div>
      )
    },
    {
      id: "02",
      title: "Deskripsi Kasus",
      icon: <FileText />,
      short: "Implementasi sistem CRM terintegrasi untuk penumpang dan pengemudi.",
      long: (
        <div className="modal-body-content">
          <p>inDrive mengimplementasikan sistem CRM terintegrasi untuk mengelola hubungan dengan pelanggan (penumpang dan driver) secara lebih efektif melalui pengelolaan data, otomatisasi komunikasi, dan analitik.</p>
          <div className="goals-grid">
            <div className="goal-item"><Zap size={16} /> Meningkatkan kepuasan pelanggan</div>
            <div className="goal-item"><Zap size={16} /> Mempercepat penyelesaian masalah</div>
            <div className="goal-item"><Zap size={16} /> Meningkatkan loyalitas pengguna</div>
            <div className="goal-item"><Zap size={16} /> Dukungan keputusan berbasis data</div>
          </div>
        </div>
      )
    },
    {
      id: "03",
      title: "Permasalahan",
      icon: <AlertTriangle />,
      short: "Kendala respon lambat, data tersebar, dan rendahnya personalisasi.",
      long: (
        <div className="modal-body-content">
          <p>Sebelum implementasi CRM yang optimal, inDrive menghadapi beberapa isu krusial:</p>
          <ul className="detailed-list">
            <li><span>•</span> Banyak keluhan tidak ter-respons tepat waktu di jam sibuk.</li>
            <li><span>•</span> Data pelanggan tersebar di berbagai sistem yang tidak terhubung.</li>
            <li><span>•</span> Personalisasi komunikasi masih rendah (pesan massal).</li>
            <li><span>•</span> Tingkat penyelesaian masalah pada kontak pertama (FCR) masih rendah.</li>
          </ul>
        </div>
      )
    },
    {
      id: "04",
      title: "Data Kasus",
      icon: <TrendingUp />,
      short: "Metrik performa sebelum dan sesudah implementasi sistem CRM.",
      long: (
        <div className="modal-body-content">
          <div className="table-responsive-premium">
            <table className="comparison-table-premium">
              <thead>
                <tr>
                  <th>Indikator Performa</th>
                  <th>Sebelum</th>
                  <th>Sesudah</th>
                  <th>Perubahan</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((d, i) => (
                  <tr key={i}>
                    <td>{d.indicator}</td>
                    <td>{d.before}</td>
                    <td style={{ color: '#98FF2C', fontWeight: 'bold' }}>{d.after}</td>
                    <td className="change-tag">{d.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: "05",
      title: "Analisis CRM",
      icon: <Activity />,
      short: "Integrasi strategi Operasional, Analitikal, dan Kolaboratif CRM.",
      long: (
        <div className="modal-body-content">
          <div className="analysis-cards-grid">
            <div className="analysis-card-mini">
              <h4>OPERATIONAL</h4>
              <p>Otomatisasi tiket, chatbot, dan integrasi kanal komunikasi pusat bantuan.</p>
            </div>
            <div className="analysis-card-mini">
              <h4>ANALYTICAL</h4>
              <p>Analisis perilaku, prediksi churn, dan segmentasi pengguna berbasis AI.</p>
            </div>
            <div className="analysis-card-mini">
              <h4>COLLABORATIVE</h4>
              <p>Integrasi feedback antara penumpang, driver, dan tim operasional.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "06",
      title: "Tujuan Strategis",
      icon: <Target />,
      short: "Membangun ekosistem transportasi adil melalui efisiensi layanan.",
      long: (
        <div className="modal-body-content">
          <p>Implementasi ini bertujuan untuk menempatkan pelanggan di pusat setiap keputusan bisnis melalui:</p>
          <ul className="detailed-list">
            <li><span>•</span> Personalisasi penawaran berbasis riwayat perjalanan.</li>
            <li><span>•</span> Pengurangan biaya operasional per kontak bantuan.</li>
            <li><span>•</span> Transparansi harga melalui monitoring algoritma tawar-menawar.</li>
          </ul>
        </div>
      )
    },
    {
      id: "07",
      title: "Dampak Sistem",
      icon: <Shield />,
      short: "Peningkatan signifikan pada kepuasan, retensi, dan biaya operasional.",
      long: (
        <div className="modal-body-content">
          <p>Sistem ini memberikan dampak positif yang nyata pada brand equity inDrive:</p>
          <div className="impact-stats-grid">
            <div className="impact-stat"><span>28%</span> Kepuasan Naik</div>
            <div className="impact-stat"><span>11%</span> Retensi Naik</div>
            <div className="impact-stat"><span>41%</span> Biaya Turun</div>
          </div>
        </div>
      )
    },
    {
      id: "08",
      title: "Diskusi Lanjut",
      icon: <MessageSquare />,
      short: "Eksplorasi tantangan teknis dan peluang pengembangan di masa depan.",
      long: (
        <div className="modal-body-content">
          <p>Beberapa poin diskusi untuk pengembangan sistem di masa depan:</p>
          <ol className="discussion-list-premium">
            <li>Data pelanggan apa saja yang paling penting untuk dikelola oleh inDrive?</li>
            <li>Fitur CRM mana yang paling berdampak besar pada peningkatan kepuasan pengguna?</li>
            <li>Apa saja tantangan teknis dan non-teknis yang dihadapi saat implementasi CRM?</li>
            <li>Bagaimana cara memanfaatkan data analitik untuk personalisasi layanan yang lebih efektif?</li>
            <li>Metrik performa apa saja yang wajib dipantau secara rutin oleh manajer CRM?</li>
            <li>Bagaimana peran strategi CRM dalam menjaga loyalitas mitra pengemudi di pasar yang kompetitif?</li>
          </ol>
        </div>
      )
    },
    {
      id: "09",
      title: "Kesimpulan",
      icon: <BookOpen />,
      short: "CRM sebagai pilar utama transformasi layanan transportasi global.",
      long: (
        <div className="modal-body-content">
          <div className="conclusion-box">
            <p>"CRM bukan hanya alat teknologi, tetapi strategi untuk menempatkan pelanggan sebagai pusat dari setiap keputusan bisnis."</p>
            <div className="conclusion-footer">- Analisis Strategi inDrive 2024</div>
          </div>
        </div>
      )
    }
  ];


  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="landing-nav">
        <div className="container nav-content">
          <div className="landing-logo">
            <div className="logo-icon">ID</div>
            <span>inDrive CRM</span>
          </div>
          <div className="nav-links">
            <a href="#case">Analisis Kasus</a>
            <button className="enter-btn" onClick={() => navigate('/dashboard')}>Login Admin</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero-section">
        <div className="container">
          <motion.div className="hero-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="hero-label">Studi Kasus Sistem Informasi</span>
            <h1>Analisis Strategi <br /><span>CRM inDrive</span></h1>
            <p>Eksplorasi bagaimana inDrive mentransformasi layanan transportasi digital melalui pendekatan CRM yang adil dan transparan.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="primary-btn" onClick={() => document.getElementById('case').scrollIntoView({ behavior: 'smooth' })}>
                Lihat Analisis Kasus <ChevronDown size={18} />
              </button>
              <button className="secondary-btn" onClick={() => navigate('/dashboard')}>
                Buka Dashboard
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Case Study Section */}
      <section id="case" className="points-section">
        <div className="container">
          <div className="section-header">
            <h2>9 Analisis Kasus Utama</h2>
            <p>Klik pada kartu untuk melihat detail lengkap analisis setiap poin.</p>
          </div>

          <div className="points-grid">
            {casePoints.map((point) => (
              <motion.div
                key={point.id}
                className="point-card-v2 glass-card"
                onClick={() => setActivePoint(point)}
                whileHover={{ y: -10, borderColor: '#98FF2C' }}
              >
                <div className="card-top">
                  <span className="card-id">{point.id}</span>
                  <div className="card-icon-v2">{point.icon}</div>
                </div>
                <h3>{point.title}</h3>
                <p>{point.short}</p>
                <div className="card-action">
                  <span>Lihat Selengkapnya</span>
                  <Maximize2 size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="glass-card cta-content-v2">
            <h2>Masuk ke Sistem CRM</h2>
            <p>Akses dashboard manajemen untuk melihat implementasi data real-time.</p>
            <button className="primary-btn" onClick={() => navigate('/dashboard')}>
              Akses Admin <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Modal / Pop Card */}
      <AnimatePresence>
        {activePoint && (
          <div className="modal-overlay-v2" onClick={() => setActivePoint(null)}>
            <motion.div
              className="modal-pop-card glass-card"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setActivePoint(null)}><X size={24} /></button>

              <div className="modal-header-v2">
                <div className="modal-icon-wrapper" style={{ color: '#98FF2C' }}>
                  {activePoint.icon}
                </div>
                <div>
                  <span className="modal-subtitle">Analisis Poin {activePoint.id}</span>
                  <h2>{activePoint.title}</h2>
                </div>
              </div>

              <div className="modal-scroll-area">
                {activePoint.long}
              </div>

              <div className="modal-footer-v2">
                <button className="close-btn-v2" onClick={() => setActivePoint(null)}>Tutup Detail</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
