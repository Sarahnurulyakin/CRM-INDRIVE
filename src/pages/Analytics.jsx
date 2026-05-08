import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Calendar } from 'lucide-react';
import './Analytics.css';

const data = [
  { name: 'Jan', revenue: 4000, rides: 2400 },
  { name: 'Feb', revenue: 3000, rides: 1398 },
  { name: 'Mar', revenue: 2000, rides: 9800 },
  { name: 'Apr', revenue: 2780, rides: 3908 },
  { name: 'May', revenue: 1890, rides: 4800 },
];

const pieData = [
  { name: 'Selesai', value: 75, color: '#98FF2C' },
  { name: 'Dibatalkan', value: 15, color: '#ef4444' },
  { name: 'Ditolak', value: 10, color: '#f59e0b' },
];

const Analytics = () => {
  return (
    <div className="analytics-page fade-in">
      <div className="analytics-header">
        <div className="date-filter glass-card">
          <Calendar size={18} />
          <span>Mei 2024</span>
        </div>
        <button className="glass-btn">
          <Download size={18} /> Unduh Laporan
        </button>
      </div>

      <div className="analytics-grid">
        <div className="chart-large glass-card">
          <h4>Pendapatan vs Perjalanan</h4>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#a0a0a5" />
                <YAxis stroke="#a0a0a5" />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#111114', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                />
                <Bar dataKey="revenue" fill="#98FF2C" radius={[4, 4, 0, 0]} />
                <Bar dataKey="rides" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-small glass-card">
          <h4>Rasio Penyelesaian</h4>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="pie-legend">
              {pieData.map((item) => (
                <div key={item.name} className="legend-item">
                  <span className="dot" style={{ backgroundColor: item.color }}></span>
                  <span>{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
