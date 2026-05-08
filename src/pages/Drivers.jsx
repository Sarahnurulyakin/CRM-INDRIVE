import React, { useState } from 'react';
import { Search, Filter, MoreVertical, CheckCircle, XCircle, Clock } from 'lucide-react';
import './Drivers.css';

const driverData = [
  { id: 'DRV001', name: 'Budi Santoso', vehicle: 'Toyota Avanza (B 1234 ABC)', status: 'Aktif', rating: 4.8, joins: '12 Jan 2024' },
  { id: 'DRV002', name: 'Siti Aminah', vehicle: 'Honda Mobilio (D 5678 DEF)', status: 'Pending', rating: 0.0, joins: '05 Mei 2024' },
  { id: 'DRV003', name: 'Agus Pratama', vehicle: 'Suzuki Ertiga (F 9012 GHI)', status: 'Aktif', rating: 4.9, joins: '20 Feb 2024' },
  { id: 'DRV004', name: 'Dewi Lestari', vehicle: 'Daihatsu Xenia (B 3456 JKL)', status: 'Ditangguhkan', rating: 4.2, joins: '15 Mar 2024' },
  { id: 'DRV005', name: 'Iwan Setiawan', vehicle: 'Mitsubishi Xpander (L 7890 MNO)', status: 'Aktif', rating: 4.7, joins: '01 Apr 2024' },
];

const Drivers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDrivers = driverData.filter(driver => 
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="drivers-page fade-in">
      <div className="table-controls glass-card">
        <div className="search-box">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Cari ID atau nama pengemudi..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-btns">
          <button className="filter-btn"><Filter size={18} /> Filter</button>
          <button className="glass-btn">+ Tambah Pengemudi</button>
        </div>
      </div>

      <div className="table-container glass-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID Pengemudi</th>
              <th>Nama Lengkap</th>
              <th>Kendaraan</th>
              <th>Tanggal Bergabung</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrivers.map((driver) => (
              <tr key={driver.id}>
                <td className="id-cell">{driver.id}</td>
                <td>
                  <div className="name-cell">
                    <div className="avatar-placeholder">{driver.name.charAt(0)}</div>
                    <span>{driver.name}</span>
                  </div>
                </td>
                <td>{driver.vehicle}</td>
                <td>{driver.joins}</td>
                <td>
                  <div className="rating-cell">
                    <span className="star">★</span>
                    <span>{driver.rating}</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${driver.status.toLowerCase()}`}>
                    {driver.status === 'Aktif' && <CheckCircle size={14} />}
                    {driver.status === 'Pending' && <Clock size={14} />}
                    {driver.status === 'Ditangguhkan' && <XCircle size={14} />}
                    {driver.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn"><MoreVertical size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Drivers;
