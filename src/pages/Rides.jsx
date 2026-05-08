import React from 'react';
import { MapPin, Navigation, DollarSign, Clock, MoreVertical } from 'lucide-react';
import './Rides.css';

const rideData = [
  { id: 'TRP1024', passenger: 'Andi Wijaya', driver: 'Budi Santoso', from: 'Stasiun Gambir', to: 'Mall Grand Indonesia', price: 'Rp 35.000', offer: 'Rp 32.000', status: 'Berlangsung' },
  { id: 'TRP1023', passenger: 'Maya Putri', driver: 'Agus Pratama', from: 'Bandara Soekarno-Hatta', to: 'BSD City', price: 'Rp 120.000', offer: 'Rp 115.000', status: 'Selesai' },
  { id: 'TRP1022', passenger: 'Rizky Fauzi', driver: 'Iwan Setiawan', from: 'Kuningan City', to: 'Tebet Eco Park', price: 'Rp 45.000', offer: 'Rp 45.000', status: 'Selesai' },
  { id: 'TRP1021', passenger: 'Larasati', driver: 'N/A', from: 'Sudirman Central Business District', to: 'Kemang Village', price: 'Rp 55.000', offer: 'Rp 50.000', status: 'Mencari' },
];

const Rides = () => {
  return (
    <div className="rides-page fade-in">
      <div className="stats-mini-grid">
        <div className="mini-stat glass-card">
          <span className="label">Sedang Berjalan</span>
          <span className="value">42</span>
        </div>
        <div className="mini-stat glass-card">
          <span className="label">Total Hari Ini</span>
          <span className="value">856</span>
        </div>
        <div className="mini-stat glass-card">
          <span className="label">Rata-rata Harga</span>
          <span className="value">Rp 48.2k</span>
        </div>
      </div>

      <div className="table-container glass-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID Trip</th>
              <th>Penumpang</th>
              <th>Pengemudi</th>
              <th>Rute (Asal - Tujuan)</th>
              <th>Harga Akhir</th>
              <th>Nego Awal</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rideData.map((ride) => (
              <tr key={ride.id}>
                <td className="id-cell">{ride.id}</td>
                <td>{ride.passenger}</td>
                <td>{ride.driver}</td>
                <td>
                  <div className="route-cell">
                    <div className="route-points">
                      <div className="point from"><MapPin size={12} /> {ride.from}</div>
                      <div className="point to"><Navigation size={12} /> {ride.to}</div>
                    </div>
                  </div>
                </td>
                <td><span className="price-tag">{ride.price}</span></td>
                <td className="text-muted">{ride.offer}</td>
                <td>
                  <span className={`status-badge ${ride.status.toLowerCase()}`}>
                    {ride.status}
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

export default Rides;
