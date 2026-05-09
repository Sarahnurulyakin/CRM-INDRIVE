import React from 'react';
import { Bot, Cpu, Zap, Target, BrainCircuit, Sparkles } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import './Analytics.css';

const AIInsight = () => {
  const radarData = [
    { subject: 'Loyalitas', A: 120, fullMark: 150 },
    { subject: 'Keaktifan', A: 98, fullMark: 150 },
    { subject: 'Risiko Churn', A: 86, fullMark: 150 },
    { subject: 'Belanja', A: 99, fullMark: 150 },
    { subject: 'Interaksi', A: 85, fullMark: 150 },
  ];

  const predictionData = [
    { day: 'Sen', val: 400 },
    { day: 'Sel', val: 300 },
    { day: 'Rab', val: 600 },
    { day: 'Kam', val: 800 },
    { day: 'Jum', val: 700 },
    { day: 'Sab', val: 1100 },
    { day: 'Min', val: 1300 },
  ];

  return (
    <div className="analytics-page fade-in">
      <div className="analytics-header">
        <div className="glass-card" style={{ padding: '0.8rem 1.5rem', border: '1px solid rgba(139, 92, 246, 0.2)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Bot size={18} color="#8b5cf6" />
          <h3 style={{ margin: 0, color: '#8b5cf6', fontSize: '1.1rem', fontWeight: '700' }}>Wawasan Pintar AI</h3>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="chart-large glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
            <Target size={18} color="#98FF2C" />
            <h4 style={{ margin: 0, fontSize: '1rem' }}>Prediksi Order (Minggu Depan)</h4>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={predictionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" vertical={false} />
                <XAxis dataKey="day" stroke="#666" fontSize={11} axisLine={false} tickLine={false} />
                <YAxis stroke="#666" fontSize={11} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111114', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}
                />
                <Line type="monotone" dataKey="val" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 0 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-small glass-card">
          <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Kesehatan Database</h4>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.05)" />
                <PolarAngleAxis dataKey="subject" stroke="#666" fontSize={10} />
                <Radar name="Profil User" dataKey="A" stroke="#98FF2C" fill="#98FF2C" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid #98FF2C', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <BrainCircuit size={18} color="#98FF2C" />
            <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Kelompok Pengguna</h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#a0a0a5', lineHeight: '1.6' }}>Sistem mendeteksi 12% pengguna jarang buka aplikasi lagi. Yuk, kirim promo khusus buat tarik mereka balik!</p>
          <button className="glass-btn" style={{ marginTop: '15px', fontSize: '0.75rem', padding: '8px 16px', background: 'rgba(152, 255, 44, 0.1)', color: '#98FF2C' }}>Kirim Promo</button>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid #8b5cf6', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <Sparkles size={18} color="#8b5cf6" />
            <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Saran Penawaran</h4>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#a0a0a5', lineHeight: '1.6' }}>Penawaran "Makan Siang Hemat" diprediksi bakal naikkan transaksi 20% di area perkantoran hari Jumat nanti.</p>
          <button className="glass-btn" style={{ marginTop: '15px', fontSize: '0.75rem', padding: '8px 16px', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>Lihat Area</button>
        </div>
      </div>
    </div>
  );
};

export default AIInsight;
