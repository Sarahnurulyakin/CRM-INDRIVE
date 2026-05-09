import React from 'react';
import { Star, Smile, Meh, Frown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import './Analytics.css';

const Satisfaction = () => {
  const csatData = [
    { name: 'Sangat Puas', value: 65, color: '#98FF2C' },
    { name: 'Cukup', value: 25, color: '#f59e0b' },
    { name: 'Kurang', value: 10, color: '#ef4444' },
  ];

  const trendData = [
    { month: 'Jan', score: 4.0 },
    { month: 'Feb', score: 4.2 },
    { month: 'Mar', score: 4.5 },
    { month: 'Apr', score: 4.4 },
    { month: 'Mei', score: 4.7 },
  ];

  return (
    <div className="analytics-page fade-in">
      <div className="analytics-header">
        <div className="glass-card" style={{ padding: '0.8rem 1.5rem', border: '1px solid rgba(152, 255, 44, 0.1)' }}>
          <h3 style={{ margin: 0, color: '#98FF2C', fontSize: '1.1rem', fontWeight: '700' }}>Kepuasan Pengguna</h3>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="chart-large glass-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h4 style={{ margin: 0, fontSize: '1rem' }}>Grafik Kepuasan Bulanan</h4>
            <div style={{ padding: '4px 12px', background: 'rgba(152, 255, 44, 0.1)', borderRadius: '100px', color: '#98FF2C', fontSize: '0.75rem', fontWeight: 'bold' }}>
              Rata-rata 4.7/5.0
            </div>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <XAxis dataKey="month" stroke="#666" fontSize={11} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 5]} stroke="#666" fontSize={11} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.02)'}}
                  contentStyle={{ backgroundColor: '#111114', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}
                />
                <Bar dataKey="score" fill="#98FF2C" radius={[6, 6, 0, 0]} barSize={35} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-small glass-card">
          <h4 style={{ fontSize: '1rem' }}>Sentimen Pelanggan</h4>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={csatData} cx="50%" cy="50%" innerRadius={65} outerRadius={85} paddingAngle={8} dataKey="value" stroke="none">
                  {csatData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend" style={{ marginTop: '1rem' }}>
              {csatData.map(item => (
                <div key={item.name} className="legend-item" style={{ fontSize: '0.8rem' }}>
                  <span className="dot" style={{ backgroundColor: item.color, width: '8px', height: '8px' }}></span>
                  <span>{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ marginTop: '1.5rem', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
          <Smile size={18} color="#98FF2C" />
          <h4 style={{ margin: 0, fontSize: '1rem' }}>Komentar Terbaru</h4>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {[
            { name: "Rina S.", comment: "Drivernya ramah banget, mobilnya bersih. Mantap inDrive!", rating: 5 },
            { name: "Fajar G.", comment: "Harga paling jujur dibanding aplikasi sebelah. Pertahankan!", rating: 5 },
            { name: "Santi W.", comment: "Suka banget sama fitur tawar harganya, jadi lebih adil.", rating: 4 }
          ].map((item, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ display: 'flex', gap: '3px', color: '#98FF2C', marginBottom: '12px' }}>
                {[...Array(item.rating)].map((_, idx) => <Star key={idx} size={12} fill="#98FF2C" />)}
              </div>
              <p style={{ fontSize: '0.85rem', color: '#a0a0a5', lineHeight: '1.5', fontStyle: 'italic' }}>"{item.comment}"</p>
              <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(152, 255, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 'bold', color: '#98FF2C' }}>{item.name[0]}</div>
                <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#fff' }}>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Satisfaction;
