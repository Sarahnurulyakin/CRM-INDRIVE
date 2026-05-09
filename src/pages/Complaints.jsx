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
      <div className="page-header-simple">
        <h2>Manajemen Keluhan Internal</h2>
        <p>Pusat kendali untuk menangani laporan dari penumpang dan mitra pengemudi.</p>
      </div>

      <div className="filter-row">
        <div className="search-bar-v2">
          <Search size={18} color="#98FF2C" />
          <input type="text" placeholder="Cari ID tiket atau nama..." />
        </div>
        <div className="action-btns">
          <button className="glass-btn">
            <Filter size={16} /> Filter
          </button>
          <button className="glass-btn primary-solid">
            Export CSV
          </button>
        </div>
      </div>

      <div className="support-grid">
        <div className="tickets-section">
          <div className="tickets-list">
            {complaints.map((item) => (
              <div key={item.id} className="ticket-item-v2 glass-card">
                <div className="ticket-main-v2">
                  <div className={`prio-indicator ${item.priority.toLowerCase()}`}></div>
                  <div className="ticket-info-v2">
                    <div className="ticket-title-row">
                      <span className="ticket-id-v2">{item.id}</span>
                      <h4>{item.category}</h4>
                    </div>
                    <div className="ticket-meta-v2">
                      <span><User size={12} /> {item.user}</span>
                      <span><Tag size={12} /> {item.type}</span>
                      <span><Clock size={12} /> {item.time}</span>
                    </div>
                  </div>
                </div>
                <div className="ticket-actions-v2">
                  <span className={`status-pill-v2 ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                  <button className="more-btn"><MoreVertical size={18} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-stats">
          <div className="glass-card stat-card-v2">
            <h4 className="card-title-v2">Distribusi Keluhan</h4>
            <div className="dist-list">
              {[
                { label: 'Driver', count: 45, color: '#98FF2C' },
                { label: 'Aplikasi', count: 28, color: '#3b82f6' },
                { label: 'Harga', count: 18, color: '#f59e0b' },
                { label: 'Lainnya', count: 9, color: '#666' },
              ].map((stat, i) => (
                <div key={i} className="dist-item">
                  <div className="dist-info">
                    <span>{stat.label}</span>
                    <span className="bold">{stat.count}%</span>
                  </div>
                  <div className="progress-bg">
                    <div className="progress-bar" style={{ width: `${stat.count}%`, background: stat.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card alert-card-v2">
            <AlertTriangle size={32} color="#f59e0b" className="alert-icon" />
            <h4>Butuh Tindakan Cepat</h4>
            <p>Terdapat 3 tiket kategori 'Mendesak' yang belum ditangani lebih dari 15 menit.</p>
            <button className="action-btn-urgent">Tangani Sekarang</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Complaints;
