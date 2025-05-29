import React from 'react';

// Data kategori dengan gambar
const categories = [
  { id: 1, name: 'Football', image: 'https://play-lh.googleusercontent.com/TzTIT2uDRH4fCs9HqqxtsjE92ckv730eSnCznQyRROYXYE1VB2hIwnIo67RWlzxSab8=w526-h296-rw' },
  { id: 2, name: 'Basketball', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBsqwRbocsET1l0u_VCkV7sKTSkW8OnN3Hw&s' },
  { id: 3, name: 'Tennis', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtd2ChmKSrVRcgPrQCk1CF3GT_sZrlOhz-oQ&s' },
  { id: 4, name: 'Volleyball', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5FbsebU06gf5QgDNibql9JvKebS3nvKAdQ&s' },
  { id: 5, name: 'Swimming', image: 'https://vmrw8k5h.tinifycdn.com/news/wp-content/uploads/2021/03/kelly-pash-texas--1024x683.jpg' },
];

const Categories = () => {
  return (
    <div id="categories" style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Sport Categories</h2>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {categories.map(category => (
          
        
          <li key={category.id} style={{ margin: '10px', flex: '1 0 150px', textAlign: 'center' }}>
            <img
              src={category.image}
              alt={category.name}
              style={{ width: '150px', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' }} // Add shadow for modern look
            />
            <h3 style={{ marginTop: '10px', fontSize: '1.2em' }}>{category.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;