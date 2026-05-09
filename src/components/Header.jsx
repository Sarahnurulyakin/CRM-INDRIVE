import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';
import './Header.css';

const Header = ({ title, onMenuClick }) => {
  return (
    <header className="header glass-card">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick}><Menu size={20} /></button>
        <h1>{title}</h1>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Cari sesuatu..." />
        </div>
        
        <div className="icon-btns">
          <button className="icon-btn">
            <Bell size={20} />
            <span className="badge"></span>
          </button>
          <div className="user-profile">
            <div className="user-info">
              <span className="user-name">Sarah Ny</span>
              <span className="user-role">Administrator</span>
            </div>
            <div className="user-avatar">
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
