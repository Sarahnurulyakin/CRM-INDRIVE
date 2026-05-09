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
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Ringkasan Eksekutif</h2>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>Pantau performa CRM inDrive secara keseluruhan hari ini.</p>
      </div>

      <div className="stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        {stats.map((stat, i) => (
          <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${stat.color}15`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <stat.icon size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#666', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', margin: '2px 0' }}>{stat.value}</div>
              <div style={{ fontSize: '0.75rem', color: stat.growth.startsWith('+') ? '#98FF2C' : '#666' }}>{stat.growth} bulan ini</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid-v2" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
        {/* Left Column: Inbox & Status */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Inbox Interaksi Masuk */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
               <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '800' }}>Inbox Interaksi Masuk</h4>
               <span className="live-pulse" style={{ fontSize: '0.7rem', color: '#98FF2C', display: 'flex', alignItems: 'center', gap: '5px' }}>
                 <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#98FF2C' }}></div> REAL-TIME
               </span>
            </div>
            <div className="inbox-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { source: 'Aplikasi', user: 'Anita Wijaya', msg: 'Tawar harga tidak muncul...', time: '1m ago' },
                { source: 'WhatsApp', user: 'Bambang S.', msg: 'Cek status refund saldo', time: '3m ago' },
                { source: 'Email', user: 'Kevin J.', msg: 'Laporan barang tertinggal', time: '10m ago' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: '#98FF2C', fontWeight: 'bold', marginBottom: '2px' }}>{item.source}</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>{item.user}</div>
                    <div style={{ fontSize: '0.75rem', color: '#666' }}>{item.msg}</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#444' }}>{item.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Tiket Otomatis */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ margin: '0 0 1.5rem 0', fontSize: '1rem', fontWeight: '800' }}>Status Tiket Otomatis (Integrated)</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
               <thead>
                 <tr style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#666' }}>
                   <th style={{ padding: '10px' }}>ID</th>
                   <th style={{ padding: '10px' }}>PELANGGAN</th>
                   <th style={{ padding: '10px' }}>TIMESTAMP</th>
                   <th style={{ padding: '10px' }}>STATUS</th>
                 </tr>
               </thead>
               <tbody>
                 {[
                   { id: '#ID-4421', user: 'Rizky Amalia', time: '14:20:05', status: 'Otomatis' },
                   { id: '#ID-4422', user: 'Doni Tata', time: '14:22:12', status: 'Otomatis' },
                   { id: '#ID-4423', user: 'Fadhil M.', time: '14:25:30', status: 'Eskalasi' },
                 ].map((t, i) => (
                   <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                     <td style={{ padding: '10px', fontWeight: 'bold' }}>{t.id}</td>
                     <td style={{ padding: '10px' }}>{t.user}</td>
                     <td style={{ padding: '10px', color: '#666' }}>{t.time}</td>
                     <td style={{ padding: '10px' }}>
                        <span style={{ padding: '2px 6px', borderRadius: '4px', background: 'rgba(152, 255, 44, 0.05)', fontSize: '0.65rem', color: '#98FF2C' }}>{t.status}</span>
                     </td>
                   </tr>
                 ))}
               </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: AI Log & System Health */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* System Health */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
             <h4 style={{ margin: '0 0 1.25rem 0', fontSize: '1rem', fontWeight: '800' }}>Kesehatan Sistem</h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Database CRM', status: 'Online', color: '#10b981' },
                  { label: 'Chatbot Engine', status: 'Optimal', color: '#98FF2C' },
                  { label: 'API Gateway', status: 'Online', color: '#10b981' },
                  { label: 'Geo-Tracking', status: 'Stabil', color: '#3b82f6' },
                ].map((sys, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                    <span style={{ color: '#aaa' }}>{sys.label}</span>
                    <span style={{ color: sys.color, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: sys.color }}></div> {sys.status}
                    </span>
                  </div>
                ))}
             </div>
          </div>

          {/* Log Respon Awal AI */}
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '800' }}>Log Konsol AI</h4>
            <div style={{ padding: '15px', background: '#09090b', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', minHeight: '150px' }}>
               <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#52525b', lineHeight: '1.5' }}>
                  <div style={{ color: '#98FF2C' }}>[SYSTEM] AI Engine v2.4 initialized.</div>
                  <div>[15:20:01] Processing Ticket #ID-4421...</div>
                  <div style={{ color: '#3b82f6' }}>[ANALYSIS] Intent: Pricing issue (98%)</div>
                  <div>[15:20:05] Automated response sent.</div>
                  <div style={{ color: '#f59e0b' }}>[15:22:10] Escalating #ID-4423 to human...</div>
                  <div className="cursor-blink" style={{ display: 'inline-block', width: '8px', height: '14px', background: '#98FF2C', verticalAlign: 'middle', marginLeft: '4px' }}></div>
               </div>
            </div>
          </div>

          {/* Admin Stats */}
          <div className="glass-card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(152, 255, 44, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)' }}>
             <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#98FF2C' }}>Operasional Hari Ini</h4>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ textAlign: 'center', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                   <div style={{ fontSize: '1.2rem', fontWeight: '900' }}>42</div>
                   <div style={{ fontSize: '0.65rem', color: '#666' }}>ADMIN ONLINE</div>
                </div>
                <div style={{ textAlign: 'center', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                   <div style={{ fontSize: '1.2rem', fontWeight: '900' }}>1.8m</div>
                   <div style={{ fontSize: '0.65rem', color: '#666' }}>AVG RESOLUTION</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



