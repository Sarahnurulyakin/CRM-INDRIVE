import React from 'react';
import { AlertTriangle, Search, Filter, MoreVertical, Clock, User, Tag } from 'lucide-react';
import './Support.css';

const Complaints = () => {
  const complaints = [
    { id: 'TKT-101', user: 'Rahmat Hidayat', type: 'Penumpang', category: 'Driver Kurang Sopan', priority: 'Tinggi', status: 'Baru', time: '5 menit lalu' },
    { id: 'TKT-102', user: 'Siska Putri', type: 'Penumpang', category: 'Barang Tertinggal', priority: 'Mendesak', status: 'Diproses', time: '15 menit lalu' },
    { id: 'TKT-103', user: 'Andi Pratama', type: 'Driver', category: 'Masalah Top-up', priority: 'Sedang', status: 'Selesai', time: '1 jam lalu' },
    { id: 'TKT-104', user: 'Lusi Ana', type: 'Penumpang', category: 'Aplikasi Error', priority: 'Rendah', status: 'Selesai', time: '2 jam lalu' },
  ];

  return (
    <div className="support-page fade-in">
      <div className="page-header-simple" style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.5rem' }}>Manajemen Keluhan Internal</h2>
        <p style={{ color: '#666' }}>Pusat kendali untuk menangani laporan dari penumpang dan mitra pengemudi.</p>
      </div>

      <div className="filter-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="search-bar-v2" style={{ flexGrow: 1, maxWidth: '400px', display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '12px 20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.08)', gap: '12px' }}>
          <Search size={18} color="#98FF2C" />
          <input type="text" placeholder="Cari ID tiket atau nama..." style={{ background: 'none', border: 'none', color: '#fff', outline: 'none', width: '100%', fontSize: '0.9rem' }} />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="glass-btn" style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
            <Filter size={16} /> Filter
          </button>
          <button className="glass-btn primary" style={{ background: '#98FF2C', color: '#000', border: 'none', padding: '10px 18px', fontWeight: 'bold', fontSize: '0.85rem' }}>
            Export CSV
          </button>
        </div>
      </div>

      <div className="support-grid" style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '2rem' }}>
        <div className="tickets-section">
          <div className="tickets-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {complaints.map((item) => (
              <div key={item.id} className="ticket-item glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div className="ticket-main-v2" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div className={`prio-indicator ${item.priority.toLowerCase()}`} style={{ width: '4px', height: '40px', borderRadius: '4px', background: item.priority === 'Mendesak' ? '#ef4444' : (item.priority === 'Tinggi' ? '#f59e0b' : '#3b82f6') }}></div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: '800', color: '#98FF2C', letterSpacing: '1px' }}>{item.id}</span>
                      <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700' }}>{item.category}</h4>
                    </div>
                    <div style={{ display: 'flex', gap: '15px', color: '#666', fontSize: '0.75rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={12} /> {item.user}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Tag size={12} /> {item.type}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {item.time}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span className={`status-pill ${item.status.toLowerCase()}`} style={{ padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 'bold', background: item.status === 'Baru' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(16, 185, 129, 0.1)', color: item.status === 'Baru' ? '#3b82f6' : '#10b981' }}>
                    {item.status}
                  </span>
                  <button style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer' }}><MoreVertical size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-stats">
          <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h4 style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#666' }}>Distribusi Keluhan</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Driver', count: 45, color: '#98FF2C' },
                { label: 'Aplikasi', count: 28, color: '#3b82f6' },
                { label: 'Harga', count: 18, color: '#f59e0b' },
                { label: 'Lainnya', count: 9, color: '#666' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px' }}>
                    <span>{stat.label}</span>
                    <span style={{ fontWeight: 'bold' }}>{stat.count}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                    <div style={{ width: `${stat.count}%`, height: '100%', background: stat.color, borderRadius: '10px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
            <AlertTriangle size={32} color="#f59e0b" style={{ margin: '0 auto 1rem' }} />
            <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9rem' }}>Butuh Tindakan Cepat</h4>
            <p style={{ fontSize: '0.75rem', color: '#666', lineHeight: '1.5' }}>Terdapat 3 tiket kategori 'Mendesak' yang belum ditangani lebih dari 15 menit.</p>
            <button style={{ marginTop: '1rem', width: '100%', padding: '10px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold' }}>Tangani Sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
