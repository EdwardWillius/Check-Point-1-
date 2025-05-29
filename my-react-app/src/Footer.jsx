// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      height: '15vh', // Mengatur tinggi footer menjadi 15% dari tinggi viewport
      backgroundColor: '#5C6AC4', 
      color: 'white', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      padding: '10px' // Menambahkan padding untuk estetika
    }}>
      <img
        src="https://cdn.antaranews.com/cache/800x533/2023/02/25/IMG_20230224_201245.jpg" // Ganti dengan URL gambar yang diinginkan
        alt="Footer Logo"
        style={{ width: 'auto', height: '15vh' }} // Gambar memenuhi lebar footer
      />
      <p style={{ margin: '0' }}>© 2023 Sports Reservation System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;