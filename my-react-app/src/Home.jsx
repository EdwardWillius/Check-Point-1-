// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  const handleGetStarted = () => {
    navigate('/auth'); // Mengarahkan ke halaman Auth
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Welcome to the Sports Reservation System</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Your one-stop solution for booking sports activities, locations, and more!</p>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGAMvctn6ckvtXE8Sx8ql3fLO6hvMBpWGWw&s" 
        alt="Sports" 
        style={{ 
          width: '100%', 
          maxWidth: '800px', 
          borderRadius: '10px', 
          margin: '20px 0',
          height: 'auto'
        }} 
      />
      <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
        Explore various sports categories, reserve your spot in exciting activities, and choose your preferred locations.
      </p>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Get Started!</h2>
      <p style={{ fontSize: '1rem' }}>
        Navigate through the app using the menu above to find everything you need for your sports journey.
      </p>
      <button 
        onClick={handleGetStarted} 
        style={{ 
          padding: '10px 20px', 
          fontSize: '1rem', 
          borderRadius: '5px', 
          border: 'none', 
         
            backgroundColor: '#5C6AC4',
            color: 'white',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Get Started
        </button>
      </div>
    );
};

export default Home;