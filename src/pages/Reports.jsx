import React from 'react';
import { FileText, Download, Calendar, Filter, FileSpreadsheet, FilePieChart } from 'lucide-react';
import './Analytics.css';

const Reports = () => {
  const reportTypes = [
    { title: 'Laporan Pendapatan', desc: 'Rekap transaksi, komisi, dan total omzet bulanan.', icon: FileSpreadsheet, color: '#10b981' },
    { title: 'Aktivitas Pengguna', desc: 'Data pengguna baru, aktif, dan yang berhenti pakai.', icon: FilePieChart, color: '#3b82f6' },
    { title: 'Performa Driver', desc: 'Rating rata-rata, jumlah order, dan jam kerja driver.', icon: FileText, color: '#f59e0b' },
    { title: 'Ringkasan Bisnis', desc: 'Ikhtisar performa CRM inDrive secara keseluruhan.', icon: FileText, color: '#8b5cf6' },
  ];

  const recentReports = [
    { name: 'Laporan_Mei_2024.pdf', date: 'Hari ini', size: '1.2 MB' },
    { name: 'Analisis_User_Q1.xlsx', date: '2 hari lalu', size: '2.5 MB' },
    { name: 'Review_Driver_Mingguan.pdf', date: '5 hari lalu', size: '890 KB' },
  ];

  return (
    <div className="analytics-page fade-in">
      <div className="analytics-header">
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div className="date-filter glass-card" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Calendar size={16} color="#98FF2C" />
            <span style={{ fontSize: '0.85rem' }}>Mei 2024</span>
          </div>
          <div className="date-filter glass-card" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Filter size={16} color="#98FF2C" />
            <span style={{ fontSize: '0.85rem' }}>Semua Data</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        {reportTypes.map((report, index) => (
          <div key={index} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', border: '1px solid rgba(255,255,255,0.03)', transition: 'transform 0.3s ease' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${report.color}10`, color: report.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <report.icon size={22} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: '700' }}>{report.title}</h4>
              <p style={{ fontSize: '0.8rem', color: '#666', margin: 0, lineHeight: '1.4' }}>{report.desc}</p>
            </div>
            <button className="glass-btn" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'rgba(255,255,255,0.03)', fontSize: '0.8rem', padding: '10px' }}>
              <Download size={14} /> Buat Laporan
            </button>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ marginTop: '2rem', padding: '1.5rem' }}>
        <h4 style={{ margin: '0 0 1.5rem 0', fontSize: '1rem' }}>File Terakhir Dibuat</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {recentReports.map((file, i) => (
            <div key={i} className="glass-card" style={{ padding: '0.8rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#98FF2C', background: 'rgba(152, 255, 44, 0.05)', padding: '8px', borderRadius: '8px' }}><FileText size={18} /></div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{file.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#555' }}>Dibuat {file.date} • {file.size}</div>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: '#98FF2C', cursor: 'pointer', padding: '5px' }}>
                <Download size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
