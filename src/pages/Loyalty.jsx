import React from 'react';
import { Award, Gift, Zap, TrendingUp, Users } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Analytics.css';

const Loyalty = () => {
  const loyaltyData = [
    { name: 'Minggu 1', points: 350 },
    { name: 'Minggu 2', points: 720 },
    { name: 'Minggu 3', points: 580 },
    { name: 'Minggu 4', points: 1100 },
    { name: 'Minggu 5', points: 1450 },
  ];

  const tiers = [
    { name: 'Bronze', count: '45.230', color: '#cd7f32', icon: Zap },
    { name: 'Silver', count: '12.450', color: '#c0c0c0', icon: Award },
    { name: 'Gold', count: '5.670', color: '#ffd700', icon: Gift },
    { name: 'Platinum', count: '1.200', color: '#e5e4e2', icon: TrendingUp },
  ];

  return (
    <div className="analytics-page fade-in">
      <div className="analytics-header">
        <div className="glass-card" style={{ padding: '0.8rem 1.5rem', border: '1px solid rgba(255, 215, 0, 0.1)' }}>
          <h3 style={{ margin: 0, color: '#ffd700', fontSize: '1.1rem', fontWeight: '700' }}>Loyalitas & Hadiah</h3>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="chart-large glass-card">
          <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Pertumbuhan Poin Member</h4>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={loyaltyData}>
                <defs>
                  <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#98FF2C" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#98FF2C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <XAxis dataKey="name" stroke="#666" fontSize={11} axisLine={false} tickLine={false} />
                <YAxis stroke="#666" fontSize={11} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111114', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}
                />
                <Area type="monotone" dataKey="points" stroke="#98FF2C" strokeWidth={2} fillOpacity={1} fill="url(#colorPoints)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-small glass-card">
          <h4 style={{ fontSize: '1rem' }}>Level Keanggotaan</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1.2rem' }}>
            {tiers.map((tier, index) => (
              <div key={index} className="glass-card" style={{ padding: '0.9rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${tier.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: tier.color }}>
                  <tier.icon size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>{tier.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#666' }}>{tier.count} Orang</div>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#98FF2C' }}>+{index + 3}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ marginTop: '1.5rem', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h4 style={{ margin: 0, fontSize: '1rem' }}>Penukaran Hadiah Terakhir</h4>
          <button className="glass-btn" style={{ fontSize: '0.75rem', padding: '6px 12px' }}>Riwayat Lengkap</button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '12px', fontSize: '0.8rem', color: '#666', fontWeight: '500' }}>User ID</th>
                <th style={{ padding: '12px', fontSize: '0.8rem', color: '#666', fontWeight: '500' }}>Hadiah</th>
                <th style={{ padding: '12px', fontSize: '0.8rem', color: '#666', fontWeight: '500' }}>Poin</th>
                <th style={{ padding: '12px', fontSize: '0.8rem', color: '#666', fontWeight: '500' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "ID-772", item: "Voucher Bensin 20rb", points: "450 pts", status: "Selesai" },
                { id: "ID-114", item: "Saldo inDrive 50rb", points: "1.000 pts", status: "Selesai" },
                { id: "ID-056", item: "Kaos Eksklusif", points: "2.500 pts", status: "Dikirim" }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '12px', fontSize: '0.85rem', fontWeight: '600' }}>{row.id}</td>
                  <td style={{ padding: '12px', fontSize: '0.85rem' }}>{row.item}</td>
                  <td style={{ padding: '12px', fontSize: '0.85rem', color: '#98FF2C' }}>{row.points}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{ fontSize: '0.7rem', padding: '4px 10px', borderRadius: '100px', background: 'rgba(152, 255, 44, 0.08)', color: '#98FF2C', fontWeight: '600' }}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;
