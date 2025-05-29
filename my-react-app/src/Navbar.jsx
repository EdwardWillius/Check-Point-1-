// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/World_Boxing_logo_2023.svg/2560px-World_Boxing_logo_2023.svg.png';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#5C6AC4', color: 'white', display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
      <h2>Sports App</h2>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '15px' }}>
        <li><Link to="/auth" style={{ color: 'white' }}>Authentication</Link></li>
        <li><Link to="/categories" style={{ color: 'white' }}>Categories</Link></li>
        <li><Link to="/locations" style={{ color: 'white' }}>Locations</Link></li>
        <li><Link to="/activities" style={{ color: 'white' }}>Activities</Link></li>
        <li><Link to="/payment" style={{ color: 'white' }}>Payment</Link></li>
        <li><Link to="/cart" style={{ color: 'white' }}>Cart</Link></li>
        <li><Link to="/transactions" style={{ color: 'white' }}>Transactions</Link></li>
        <li><Link to="/" style={{ color: 'white' }}>Back to Home</Link></li> {/* Tombol Back to Home */}
      </ul>
    </nav>
  );
};

export default Navbar;