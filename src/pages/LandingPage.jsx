import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Shield, Zap, Globe, Users, 
  CheckCircle, Activity, TrendingUp, 
  MousePointer2, MessageSquare, MapPin,
  Target, Info, AlertTriangle, FileText, BookOpen, ChevronDown, ChevronUp
} from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [expandedPoint, setExpandedPoint] = useState(null);

  const togglePoint = (id) => {
    setExpandedPoint(expandedPoint === id ? null : id);
  };

  const casePoints = [
    { 
      id: "01", 
      title: "LATAR BELAKANG", 
      icon: <Info />, 
      short: "Transformasi transportasi digital menuntut efisiensi tinggi dalam mengelola ekosistem inDrive.",
      long: "Dalam era ekonomi digital yang berkembang pesat, industri ride-hailing menghadapi tantangan besar dalam mengelola volume transaksi yang masif. inDrive, sebagai platform global, memerlukan sistem yang tidak hanya mencatat transaksi tetapi juga membangun hubungan berkelanjutan dengan jutaan mitra pengemudi dan penumpang. Latar belakang ini mencakup kebutuhan akan transparansi harga melalui sistem negosiasi dan bagaimana CRM menjadi tulang punggung untuk menjaga kepercayaan pengguna di tengah persaingan ketat."
    },
    { 
      id: "02", 
      title: "DESKRIPSI KASUS", 
      icon: <FileText />, 
      short: "Sistem CRM inDrive dirancang untuk mengintegrasikan seluruh elemen operasional dalam satu platform.",
      long: "Kasus ini berfokus pada implementasi arsitektur CRM yang menghubungkan front-end aplikasi dengan back-end manajemen mitra. CRM inDrive dirancang khusus untuk mendukung fitur penawaran harga (real-time bidding). Sistem ini mengintegrasikan profil pengemudi, riwayat negosiasi, hingga sistem bantuan otomatis. Dengan integrasi ini, admin dapat melihat data secara holistik untuk mengambil keputusan cepat terkait penyesuaian layanan di wilayah tertentu."
    },
    { 
      id: "03", 
      title: "PERMASALAHAN", 
      icon: <AlertTriangle />, 
      short: "Tantangan pada transparansi harga, loyalitas pengemudi, dan kecepatan respon bantuan.",
      long: "Beberapa permasalahan utama yang diidentifikasi sebelum implementasi CRM yang optimal adalah: 1) Response time keluhan yang tidak konsisten di jam sibuk. 2) Tingkat churn pengemudi yang tinggi karena kurangnya insentif yang dipersonalisasi. 3) Kesulitan dalam mensinkronkan data preferensi pengguna di berbagai kota. 4) Kurangnya analisis mendalam terhadap pola negosiasi harga yang dapat merugikan salah satu pihak."
    },
    { 
      id: "04", 
      title: "ANALISIS CRM", 
      icon: <Activity />, 
      short: "Strategi mencakup 3 pilar utama: Operasional, Analitikal, dan Kolaboratif.",
      long: "Analisis sistem dibagi menjadi tiga pilar: 1) Operational CRM: Menyediakan alat bantu bagi tim CS untuk menangani tiket secara otomatis. 2) Analytical CRM: Menggunakan data besar untuk memprediksi tren permintaan dan menyesuaikan algoritma negosiasi harga agar tetap kompetitif. 3) Collaborative CRM: Menghubungkan feedback dari penumpang langsung ke profil pengemudi untuk proses peningkatan kualitas layanan yang berkelanjutan."
    },
    { 
      id: "05", 
      title: "DATA KASUS", 
      icon: <TrendingUp />, 
      short: "Peningkatan efisiensi respon dan kepuasan pengguna pasca implementasi.",
      long: "Data statistik menunjukkan hasil yang signifikan: Waktu respon terhadap masalah keamanan meningkat 72% lebih cepat (dari 24 jam menjadi rata-rata 2 jam). Retensi mitra pengemudi meningkat 24% melalui program loyalitas berbasis kinerja yang dicatat dalam CRM. Tingkat kepuasan pengguna akhir mencapai skor 94%, didorong oleh kemudahan dalam proses klaim bantuan dan personalisasi promo perjalanan."
    },
    { 
      id: "06", 
      title: "TUJUAN UTAMA", 
      icon: <Target />, 
      short: "Membangun ekosistem transportasi yang adil dan memperkuat hubungan mitra.",
      long: "Tujuan strategis implementasi CRM ini adalah menciptakan ekosistem transportasi digital yang berlandaskan keadilan harga. Tujuan spesifik mencakup: 1) Digitalisasi penuh alur pendaftaran mitra. 2) Pengurangan beban kerja manual tim operasional melalui otomatisasi. 3) Peningkatan nilai seumur hidup pelanggan (Customer Lifetime Value) melalui interaksi yang lebih bermakna dan dukungan yang responsif."
    },
    { 
      id: "07", 
      title: "ALUR LAYANAN", 
      icon: <Zap />, 
      short: "Siklus terpadu dari onboarding hingga monitoring keamanan perjalanan.",
      long: "Alur layanan CRM mencakup lima tahap utama: Pertama, Akuisisi & Verifikasi di mana dokumen pengemudi diperiksa secara otomatis. Kedua, Interaksi Negosiasi di mana sistem merekam pola penawaran harga. Ketiga, Eksekusi Layanan dengan pelacakan lokasi real-time. Keempat, Manajemen Keluhan yang terintegrasi langsung dengan riwayat perjalanan. Kelima, Retensi melalui analisis data untuk pemberian reward kepada mitra terbaik."
    },
    { 
      id: "08", 
      title: "DAMPAK SISTEM", 
      icon: <Shield />, 
      short: "Menciptakan transparansi layanan dan efisiensi operasional skala global.",
      long: "Dampak positif yang dirasakan adalah peningkatan transparansi bagi pengemudi mengenai pendapatan mereka dan proses banding yang lebih mudah. Namun, tantangan tetap ada pada biaya pemeliharaan server skala besar dan kebutuhan akan pelatihan berkelanjutan bagi staf operasional agar dapat memaksimalkan fitur-fitur analitik yang tersedia dalam sistem CRM."
    },
    { 
      id: "09", 
      title: "KESIMPULAN", 
      icon: <BookOpen />, 
      short: "CRM adalah pilar utama inDrive dalam mewujudkan layanan transportasi global.",
      long: "Dapat disimpulkan bahwa CRM bukan sekadar alat teknologi, melainkan strategi bisnis yang esensial bagi inDrive. Keberhasilan implementasi bergantung pada sinkronisasi antara data operasional dan kebutuhan psikologis pengguna (keadilan dan kecepatan). InDrive terus berinovasi dalam mengintegrasikan AI ke dalam CRM untuk memberikan layanan yang lebih cerdas dan efisien di masa depan."
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
            <a href="#about">Tentang</a>
            <a href="#case">Studi Kasus</a>
            <button className="enter-btn" onClick={() => navigate('/dashboard')}>Akses Admin</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero-section">
        <div className="container">
          <motion.div className="hero-content" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}}>
            <span className="hero-label">Analisis Sistem Informasi & CRM</span>
            <h1>Eksplorasi Mendalam <br/><span>Strategi inDrive</span></h1>
            <p>Bedah tuntas implementasi CRM untuk ekosistem transportasi digital yang adil, efisien, dan transparan.</p>
            <button className="primary-btn" onClick={() => navigate('/dashboard')}>
              Buka Dashboard Admin <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </header>

      {/* Expandable 9 Points Grid */}
      <section id="case" className="points-section">
        <div className="container">
          <div className="section-header">
            <h2>9 Analisis Kasus Utama</h2>
            <p>Klik "Lihat Detail" untuk mendapatkan penjelasan mendalam pada setiap poin.</p>
          </div>
          
          <div className="points-grid">
            {casePoints.map((point) => (
              <motion.div 
                key={point.id} 
                className={`point-card ${expandedPoint === point.id ? 'expanded' : ''}`}
                layout
              >
                <div className="point-top">
                  <span className="point-id">{point.id}</span>
                  <div className="point-icon">{point.icon}</div>
                </div>
                <h3>{point.title}</h3>
                <p className="short-desc">{point.short}</p>
                
                <AnimatePresence>
                  {expandedPoint === point.id && (
                    <motion.div 
                      className="long-desc"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="desc-content">
                        {point.long}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  className="detail-btn" 
                  onClick={() => togglePoint(point.id)}
                >
                  {expandedPoint === point.id ? (
                    <>Tutup <ChevronUp size={16} /></>
                  ) : (
                    <>Lihat Detail <ChevronDown size={16} /></>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alur Layanan Section */}
      <section className="flow-section">
        <div className="container">
          <div className="flow-container glass-card">
            <div className="flow-header">
              <h2>Alur Layanan Digital</h2>
              <div className="flow-line"></div>
            </div>
            <div className="flow-steps">
              <div className="f-step">
                <div className="f-icon"><MousePointer2 size={24} /></div>
                <h4>Onboarding</h4>
                <p>Registrasi & Verifikasi</p>
              </div>
              <div className="f-step">
                <div className="f-icon"><MessageSquare size={24} /></div>
                <h4>Negosiasi</h4>
                <p>Sistem Tawar Menawar</p>
              </div>
              <div className="f-step">
                <div className="f-icon"><MapPin size={24} /></div>
                <h4>Eksekusi</h4>
                <p>Monitoring Perjalanan</p>
              </div>
              <div className="f-step">
                <div className="f-icon"><CheckCircle size={24} /></div>
                <h4>Evaluasi</h4>
                <p>Feedback & Retensi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-simple">
        <div className="container">
          <div className="footer-content">
            <div className="f-brand">inDrive CRM Case Study</div>
            <p>© 2024 Project Sistem Informasi. Analisis Strategis CRM Global.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
