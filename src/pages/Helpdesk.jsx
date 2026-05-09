import React, { useState } from 'react';
import { 
  MessageSquare, 
  Ticket, 
  Zap, 
  Headphones, 
  Database, 
  Star, 
  Search, 
  Clock, 
  User, 
  FileText, 
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  Settings
} from 'lucide-react';
import './Support.css'; 

const Helpdesk = () => {
  const [activeTab, setActiveTab] = useState('kendali');

  const tabs = [
    { id: 'kendali', label: '1. Pusat Kendali', icon: Zap },
    { id: 'eskalasi', label: '2. Eskalasi Agen', icon: Headphones },
    { id: 'feedback', label: '3. Penyesuaian & Feedback', icon: Star },
    { id: 'database', label: '4. Database & Dokumen', icon: Database },
  ];

  return (
    <div className="helpdesk-page fade-in">
      <div className="page-header-simple">
        <h2>Operational CRM Hub</h2>
        <p>Pusat operasional internal untuk pemantauan, penanganan, dan manajemen data layanan.</p>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {/* TAB 1: PUSAT KENDALI */}
        {activeTab === 'kendali' && (
          <div className="grid-layout grid-kendali fade-in">
            <div className="glass-card helpdesk-card">
               <h4 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><MessageSquare size={20} color="#98FF2C"/> Inbox Interaksi Masuk</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { source: 'App', user: 'Anita W.', msg: 'Tawar harga gagal...', time: '1m ago' },
                    { source: 'Email', user: 'Budi S.', msg: 'Konfirmasi dokumen mitra', time: '5m ago' },
                    { source: 'WA', user: 'Siska P.', msg: 'Barang tertinggal di mobil', time: '12m ago' },
                  ].map((item, i) => (
                    <div key={i} className="monitor-item">
                      <div>
                        <span style={{ fontSize: '0.65rem', color: '#98FF2C', fontWeight: '900' }}>[{item.source}]</span>
                        <div style={{ fontWeight: '700', margin: '4px 0' }}>{item.user}</div>
                        <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>{item.msg}</p>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#444' }}>{item.time}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
               <div className="glass-card helpdesk-card" style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Status Tiket Otomatis</h4>
                  <div style={{ fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>#T-9901 Created</span> <span style={{ color: '#98FF2C' }}>Success</span></div>
                     <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>#T-9902 Created</span> <span style={{ color: '#98FF2C' }}>Success</span></div>
                     <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>#T-9903 Created</span> <span style={{ color: '#98FF2C' }}>Success</span></div>
                  </div>
               </div>
               <div className="glass-card helpdesk-card">
                  <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Log Respon AI</h4>
                  <div className="log-area">
                     [15:10] Sent: "Halo, Mohon tunggu..." <br/>
                     [15:11] Sent: "Verifikasi ID Berhasil" <br/>
                     [15:12] Action: Route to CS Human
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* TAB 2: ESKALASI AGEN */}
        {activeTab === 'eskalasi' && (
          <div className="grid-layout grid-eskalasi fade-in" style={{ gridTemplateColumns: '2fr 1fr' }}>
            <div className="glass-card helpdesk-card">
               <h4 style={{ marginBottom: '1.5rem' }}>Antrean Butuh Manusia</h4>
               <div style={{ overflowX: 'auto' }}>
                 <table className="eskalasi-table">
                    <thead>
                      <tr>
                        <th>KELUHAN</th>
                        <th>ALASAN GAGAL AI</th>
                        <th style={{ textAlign: 'center' }}>AKSI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cat: 'Perselisihan Harga', reason: 'Tawar-menawar Kompleks', prio: 'Tinggi' },
                        { cat: 'Kecelakaan/Insiden', reason: 'Butuh Validasi Dokumen', prio: 'Mendesak' },
                      ].map((item, i) => (
                        <tr key={i}>
                          <td>
                            <div style={{ fontWeight: 'bold' }}>{item.cat}</div>
                            <span style={{ fontSize: '0.7rem', color: item.prio === 'Mendesak' ? '#ef4444' : '#f59e0b' }}>Priority: {item.prio}</span>
                          </td>
                          <td style={{ color: '#888' }}>{item.reason}</td>
                          <td style={{ textAlign: 'center' }}>
                            <button style={{ padding: '6px 12px', background: '#98FF2C', border: 'none', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 'bold', color: '#000' }}>Tangani</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                 </table>
               </div>
            </div>
            <div className="glass-card helpdesk-card">
               <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Riwayat Solusi (Internal FAQ)</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Template Refund Saldo', 'Aturan Barang Tertinggal', 'SOP Insiden Keamanan'].map((faq, i) => (
                    <div key={i} style={{ padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '0.8rem', cursor: 'pointer', border: '1px solid var(--border)' }}>
                      {faq}
                    </div>
                  ))}
               </div>
               <button style={{ marginTop: '2rem', width: '100%', padding: '12px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  Eskalasi ke Senior
               </button>
            </div>
          </div>
        )}

        {/* TAB 3: FEEDBACK */}
        {activeTab === 'feedback' && (
          <div className="grid-layout grid-feedback fade-in" style={{ gridTemplateColumns: '1fr 1fr' }}>
             <div className="glass-card helpdesk-card">
                <h4 style={{ marginBottom: '1.5rem' }}>Monitoring Rating & Kepuasan</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                   {[
                     { user: 'Siti Aminah', star: 5, comment: 'Sangat cepat dibantu admin!' },
                     { user: 'Doni Tata', star: 4, comment: 'Respon chatbot oke, tapi butuh agen akhirnya.' },
                   ].map((f, i) => (
                     <div key={i} style={{ padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                           <span style={{ fontWeight: 'bold' }}>{f.user}</span>
                           <div style={{ color: '#98FF2C' }}>{Array(f.star).fill('★').join('')}</div>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>"{f.comment}"</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="glass-card helpdesk-card">
                <h4 style={{ marginBottom: '1.5rem' }}>Update Status Tiket</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.85rem', flexGrow: 1 }}>Tiket #ID-4421</span>
                      <select style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: '#fff', padding: '5px 10px', borderRadius: '6px' }}>
                         <option>Pilih Status</option>
                         <option>Selesai</option>
                         <option>Perlu Tindak Lanjut</option>
                      </select>
                      <button style={{ padding: '5px 15px', background: '#98FF2C', border: 'none', borderRadius: '6px', color: '#000', fontWeight: 'bold' }}>Update</button>
                   </div>
                   <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '10px 0' }} />
                   <h5 style={{ fontSize: '0.85rem', color: '#666' }}>Ringkasan Interaksi Akhir</h5>
                   <textarea placeholder="Tuliskan ringkasan untuk tim analitik..." style={{ width: '100%', height: '80px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '10px', padding: '10px', color: '#fff', fontSize: '0.8rem' }}></textarea>
                </div>
             </div>
          </div>
        )}

        {/* TAB 4: DATABASE */}
        {activeTab === 'database' && (
          <div className="grid-layout grid-database fade-in">
             <div className="glass-card helpdesk-card">
                <h4 style={{ marginBottom: '1.5rem' }}>Profil & Preferensi Pelanggan</h4>
                <div className="profil-pelanggan-grid">
                   {[
                     { name: 'Rizky Amalia', type: 'Premium', trip: '120 Rides', preference: 'Mobil Mewah' },
                     { name: 'Fadhil M.', type: 'Mitra Gold', trip: '2 Yrs', preference: 'Payout Mingguan' },
                   ].map((p, i) => (
                     <div key={i} className="profil-card">
                        <div style={{ fontSize: '0.7rem', color: '#98FF2C', marginBottom: '5px' }}>{p.type}</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '10px' }}>{p.name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>Histori: {p.trip}</div>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>Pref: {p.preference}</div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="glass-card helpdesk-card">
                <h4 style={{ marginBottom: '1.5rem' }}>Log Layanan (Histori Interaksi)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                   {[
                     { date: '2024-05-01', ticket: '#ID-1200', summary: 'Komplain tawar harga, diselesaikan dengan voucher.' },
                     { date: '2024-04-15', ticket: '#ID-0988', summary: 'Tanya syarat driver, diarahkan ke website pendaftaran.' },
                   ].map((l, i) => (
                     <div key={i} style={{ padding: '12px', borderLeft: '3px solid #98FF2C', background: 'rgba(255,255,255,0.01)', fontSize: '0.85rem' }}>
                        <span style={{ color: '#444' }}>{l.date} | </span>
                        <span style={{ fontWeight: 'bold' }}>{l.ticket}</span>
                        <p style={{ margin: '5px 0 0 0', color: '#888' }}>{l.summary}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default Helpdesk;
