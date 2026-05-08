import React from 'react';
import { LayoutDashboard, Users, Car, HelpCircle, BarChart3, Settings, LogOut, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Pengemudi', path: '/drivers' },
    { icon: Car, label: 'Perjalanan', path: '/rides' },
    { icon: BarChart3, label: 'Analitik', path: '/analytics' },
    { icon: HelpCircle, label: 'Dukungan', path: '/support' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">ID</div>
        <span>inDrive CRM</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
            <ChevronRight size={16} className="arrow" />
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="nav-item">
          <Settings size={20} />
          <span>Pengaturan</span>
        </div>
        <div className="nav-item logout">
          <LogOut size={20} />
          <span>Keluar</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
