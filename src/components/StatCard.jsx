import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatCard.css';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
  return (
    <div className="stat-card glass-card">
      <div className="stat-header">
        <div className="stat-icon" style={{ backgroundColor: `${color}20`, color: color }}>
          <Icon size={24} />
        </div>
        <div className={`stat-trend ${trend === 'up' ? 'up' : 'down'}`}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{trendValue}%</span>
        </div>
      </div>
      
      <div className="stat-body">
        <span className="stat-title">{title}</span>
        <h2 className="stat-value">{value}</h2>
      </div>
    </div>
  );
};

export default StatCard;
