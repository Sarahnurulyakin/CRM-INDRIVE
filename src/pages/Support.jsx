import React from 'react';
import { MessageSquare, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import './Support.css';

const ticketData = [
  { id: 'TKT-001', user: 'Budi Santoso', subject: 'Masalah Verifikasi Dokumen', priority: 'Tinggi', status: 'Terbuka', time: '2 jam yang lalu' },
  { id: 'TKT-002', user: 'Maya Putri', subject: 'Refund Perjalanan TRP1023', priority: 'Sedang', status: 'Sedang Diproses', time: '5 jam yang lalu' },
  { id: 'TKT-003', user: 'Andi Wijaya', subject: 'Akun Terkunci', priority: 'Mendesak', status: 'Terbuka', time: '10 menit yang lalu' },
  { id: 'TKT-004', user: 'Larasati', subject: 'Lupa Barang di Mobil', priority: 'Rendah', status: 'Selesai', time: '1 hari yang lalu' },
];

const Support = () => {
  return (
    <div className="support-page fade-in">
      <div className="support-grid">
        <div className="tickets-section">
          <div className="section-header glass-card">
            <h3>Tiket Dukungan Aktif</h3>
            <button className="glass-btn">+ Tiket Baru</button>
          </div>

          <div className="tickets-list">
            {ticketData.map((ticket) => (
              <div key={ticket.id} className="ticket-item glass-card">
                <div className="ticket-main">
                  <div className="ticket-icon">
                    <MessageSquare size={20} />
                  </div>
                  <div className="ticket-details">
                    <div className="ticket-title">
                      <span className="ticket-id">{ticket.id}</span>
                      <h4>{ticket.subject}</h4>
                    </div>
                    <p className="ticket-meta">Oleh: <strong>{ticket.user}</strong> • {ticket.time}</p>
                  </div>
                </div>
                <div className="ticket-actions">
                  <span className={`priority-tag ${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                  <span className={`status-tag ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                    {ticket.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="support-stats">
          <div className="stat-box glass-card">
            <h4>Ringkasan Tiket</h4>
            <div className="mini-stats">
              <div className="m-stat">
                <span className="count">12</span>
                <span className="label">Terbuka</span>
              </div>
              <div className="m-stat">
                <span className="count">8</span>
                <span className="label">Diproses</span>
              </div>
              <div className="m-stat">
                <span className="count">145</span>
                <span className="label">Selesai</span>
              </div>
            </div>
          </div>

          <div className="knowledge-base glass-card">
            <h4>Bantuan Cepat</h4>
            <ul className="help-links">
              <li><AlertCircle size={16} /> Cara verifikasi pengemudi</li>
              <li><AlertCircle size={16} /> Kebijakan refund InDrive</li>
              <li><AlertCircle size={16} /> Panduan keamanan aplikasi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
