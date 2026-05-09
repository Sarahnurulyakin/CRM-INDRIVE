import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { 
  Users, 
  Smile,
  ShieldCheck,
  Zap,
  TrendingUp,
  Navigation
} from 'lucide-react';
import './Dashboard.css';

const stats = [
  { label: 'Total Pengguna', value: '46.2jt', growth: '+12%', icon: Users, color: '#3b82f6' },
  { label: 'Driver Aktif', value: '1.8jt', growth: '+5%', icon: Navigation, color: '#98FF2C' },
  { label: 'Kepuasan (CSAT)', value: '4.6/5', growth: '+0.2', icon: Smile, color: '#8b5cf6' },
  { label: 'Keamanan Sistem', value: '99.9%', growth: 'Stabil', icon: ShieldCheck, color: '#10b981' },
];

const mainChartData = [
  { name: 'Jan', val: 4000 },
  { name: 'Feb', val: 3000 },
  { name: 'Mar', val: 5000 },
  { name: 'Apr', val: 4500 },
  { name: 'Mei', val: 6000 },
  { name: 'Jun', val: 5500 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-page-content fade-in">
      <div className="dashboard-header-simple">
        <h2>Ringkasan Eksekutif</h2>
        <p>Pantau performa CRM inDrive secara keseluruhan hari ini.</p>
      </div>

      <div className="stats-row">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card stat-card-mini">
            <div className="stat-icon-wrapper" style={{ background: `${stat.color}15`, color: stat.color }}>
              <stat.icon size={24} />
            </div>
            <div className="stat-info">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value-large">{stat.value}</div>
              <div className="stat-growth" style={{ color: stat.growth.startsWith('+') ? '#98FF2C' : '#666' }}>{stat.growth} bulan ini</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid-v2">
        {/* Left Column: Inbox & Status */}
        <div className="dashboard-column">
          {/* Inbox Interaksi Masuk */}
          <div className="glass-card helpdesk-card-mini">
            <div className="card-header-flex">
               <h4>Inbox Interaksi Masuk</h4>
               <span className="live-pulse">
                 <div className="pulse-dot"></div> REAL-TIME
               </span>
            </div>
            <div className="inbox-list">
              {[
                { source: 'Aplikasi', user: 'Anita Wijaya', msg: 'Tawar harga tidak muncul...', time: '1m ago' },
                { source: 'WhatsApp', user: 'Bambang S.', msg: 'Cek status refund saldo', time: '3m ago' },
                { source: 'Email', user: 'Kevin J.', msg: 'Laporan barang tertinggal', time: '10m ago' },
              ].map((item, i) => (
                <div key={i} className="inbox-item">
                  <div className="inbox-main">
                    <div className="inbox-source">{item.source}</div>
                    <div className="inbox-user">{item.user}</div>
                    <div className="inbox-msg">{item.msg}</div>
                  </div>
                  <div className="inbox-time">{item.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Tiket Otomatis */}
          <div className="glass-card helpdesk-card-mini">
            <h4>Status Tiket Otomatis (Integrated)</h4>
            <div className="table-responsive">
              <table className="dashboard-table">
                 <thead>
                   <tr>
                     <th>ID</th>
                     <th>PELANGGAN</th>
                     <th>TIMESTAMP</th>
                     <th>STATUS</th>
                   </tr>
                 </thead>
                 <tbody>
                   {[
                     { id: '#ID-4421', user: 'Rizky Amalia', time: '14:20:05', status: 'Otomatis' },
                     { id: '#ID-4422', user: 'Doni Tata', time: '14:22:12', status: 'Otomatis' },
                     { id: '#ID-4423', user: 'Fadhil M.', time: '14:25:30', status: 'Eskalasi' },
                   ].map((t, i) => (
                     <tr key={i}>
                       <td className="bold">{t.id}</td>
                       <td>{t.user}</td>
                       <td className="muted">{t.time}</td>
                       <td>
                          <span className="status-badge-mini">{t.status}</span>
                       </td>
                     </tr>
                   ))}
                 </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: AI Log & System Health */}
        <div className="dashboard-column">
          {/* System Health */}
          <div className="glass-card helpdesk-card-mini">
             <h4>Kesehatan Sistem</h4>
             <div className="system-list">
                {[
                  { label: 'Database CRM', status: 'Online', color: '#10b981' },
                  { label: 'Chatbot Engine', status: 'Optimal', color: '#98FF2C' },
                  { label: 'API Gateway', status: 'Online', color: '#10b981' },
                  { label: 'Geo-Tracking', status: 'Stabil', color: '#3b82f6' },
                ].map((sys, i) => (
                  <div key={i} className="system-item">
                    <span className="label">{sys.label}</span>
                    <span className="status" style={{ color: sys.color }}>
                      <div className="status-dot" style={{ background: sys.color }}></div> {sys.status}
                    </span>
                  </div>
                ))}
             </div>
          </div>

          {/* Log Respon Awal AI */}
          <div className="glass-card helpdesk-card-mini">
            <h4>Log Konsol AI</h4>
            <div className="console-box">
               <div className="console-content">
                  <div className="green">[SYSTEM] AI Engine v2.4 initialized.</div>
                  <div>[15:20:01] Processing Ticket #ID-4421...</div>
                  <div className="blue">[ANALYSIS] Intent: Pricing issue (98%)</div>
                  <div>[15:20:05] Automated response sent.</div>
                  <div className="orange">[15:22:10] Escalating #ID-4423 to human...</div>
                  <div className="cursor-blink"></div>
               </div>
            </div>
          </div>

          {/* Admin Stats */}
          <div className="glass-card admin-stats-card">
             <h4 className="card-label">Operasional Hari Ini</h4>
             <div className="admin-grid">
                <div className="admin-stat">
                   <div className="val">42</div>
                   <div className="lbl">ADMIN ONLINE</div>
                </div>
                <div className="admin-stat">
                   <div className="val">1.8m</div>
                   <div className="lbl">AVG RESOLUTION</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;



