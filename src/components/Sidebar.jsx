import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Headphones, 
  AlertTriangle, 
  Smile, 
  Car, 
  Star, 
  Bot, 
  FileText,
  ChevronRight,
  LogOut,
  Settings,
  X
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const menuGroups = [
// ... (rest of menuGroups remains the same)
    {
      title: 'UTAMA',
      items: [
        { icon: LayoutDashboard, label: 'Ringkasan', path: '/dashboard' },
      ]
    },
    {
      title: 'LAYANAN',
      items: [
        { icon: Headphones, label: 'Bantuan', path: '/helpdesk' },
        { icon: AlertTriangle, label: 'Keluhan', path: '/complaints' },
        { icon: Smile, label: 'Kepuasan', path: '/satisfaction' },
        { icon: Car, label: 'Driver & Merchant', path: '/drivers' },
      ]
    },
    {
      title: 'ANALITIK',
      items: [
        { icon: Star, label: 'Loyalitas', path: '/loyalty' },
        { icon: Bot, label: 'Wawasan AI', path: '/ai-insight' },
        { icon: FileText, label: 'Laporan', path: '/reports' },
      ]
    }
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <div className="logo-icon">ID</div>
        <span>inDrive CRM</span>
        <button className="sidebar-close" onClick={onClose}><X size={24} /></button>
      </div>

      <nav className="sidebar-nav">
        {menuGroups.map((group, index) => (
          <div key={index} className="nav-group">
            <h3 className="nav-group-title">{group.title}</h3>
            {group.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={onClose}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
                <ChevronRight size={14} className="arrow" />
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="nav-item">
          <Settings size={18} />
          <span>Pengaturan</span>
        </div>
        <div className="nav-item logout">
          <LogOut size={18} />
          <span>Keluar</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
