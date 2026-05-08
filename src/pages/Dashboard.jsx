import React from 'react';
import { Users, Car, Wallet, Clock, Activity, MapPin } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import StatCard from '../components/StatCard';
import './Dashboard.css';

const data = [
  { name: 'Sen', rides: 400, revenue: 2400 },
  { name: 'Sel', rides: 300, revenue: 1398 },
  { name: 'Rab', rides: 200, revenue: 9800 },
  { name: 'Kam', rides: 278, revenue: 3908 },
  { name: 'Jum', rides: 189, revenue: 4800 },
  { name: 'Sab', rides: 239, revenue: 3800 },
  { name: 'Min', rides: 349, revenue: 4300 },
];

const activityData = [
  { id: 1, type: 'registration', user: 'Budi Santoso', time: '5 menit yang lalu', status: 'Pending' },
  { id: 2, type: 'ride', user: 'Siti Aminah', time: '12 menit yang lalu', status: 'Selesai' },
  { id: 3, type: 'support', user: 'Agus Pratama', time: '25 menit yang lalu', status: 'Terbuka' },
  { id: 4, type: 'registration', user: 'Dewi Lestari', time: '1 jam yang lalu', status: 'Terverifikasi' },
];

const Dashboard = () => {
  return (
    <div className="dashboard-page fade-in">
      <div className="stats-grid">
        <StatCard 
          title="Total Perjalanan" 
          value="12.480" 
          icon={Car} 
          trend="up" 
          trendValue="12" 
          color="#98FF2C" 
        />
        <StatCard 
          title="Pengemudi Aktif" 
          value="1.240" 
          icon={Users} 
          trend="up" 
          trendValue="8" 
          color="#3b82f6" 
        />
        <StatCard 
          title="Pendapatan (jt)" 
          value="Rp 42.5" 
          icon={Wallet} 
          trend="down" 
          trendValue="3" 
          color="#10b981" 
        />
        <StatCard 
          title="Waktu Tunggu Rata-rata" 
          value="4.2 mnt" 
          icon={Clock} 
          trend="up" 
          trendValue="5" 
          color="#f59e0b" 
        />
      </div>

      <div className="charts-grid">
        <div className="chart-container glass-card">
          <div className="chart-header">
            <h3>Tren Perjalanan Mingguan</h3>
            <Activity size={20} className="text-muted" />
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRides" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#98FF2C" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#98FF2C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#a0a0a5" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a0a0a5" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111114', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#98FF2C' }}
                />
                <Area type="monotone" dataKey="rides" stroke="#98FF2C" fillOpacity={1} fill="url(#colorRides)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="activity-container glass-card">
          <div className="chart-header">
            <h3>Aktivitas Terbaru</h3>
            <button className="text-btn">Lihat Semua</button>
          </div>
          <div className="activity-list">
            {activityData.map((item) => (
              <div key={item.id} className="activity-item">
                <div className={`activity-icon-small ${item.type}`}>
                  {item.type === 'registration' && <Users size={16} />}
                  {item.type === 'ride' && <Car size={16} />}
                  {item.type === 'support' && <HelpCircle size={16} />}
                </div>
                <div className="activity-info">
                  <p className="activity-user">{item.user}</p>
                  <p className="activity-type">
                    {item.type === 'registration' ? 'Mendaftar sebagai pengemudi' : 
                     item.type === 'ride' ? 'Menyelesaikan perjalanan' : 'Mengajukan tiket dukungan'}
                  </p>
                  <span className="activity-time">{item.time}</span>
                </div>
                <div className={`activity-status ${item.status.toLowerCase()}`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HelpCircle = Clock; // Placeholder if not imported

export default Dashboard;
