// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import Categories from './Categories';
import Locations from './Locations';
import Activities from './Activities';
import PaymentMethod from './PaymentMethod';
import Cart from './Cart';
import Transactions from './Transactions';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'; // Import Home component

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <Navbar />
        <main style={{ flex: 1, padding: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Sport Reservation System</h1>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Rute untuk halaman Home */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/payment" element={<PaymentMethod />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;