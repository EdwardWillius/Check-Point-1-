// Locations.jsx
import React, { useState } from 'react';

// Data lokasi dengan gambar dan deskripsi
const locations = [
  { id: 1, name: 'Stadium A', image: 'https://populous.com/uploads/2018/01/Populous_Tottenham-Hotspur-Stadium_Credit-Edward-Hill_3-2160x1215-c-center.jpg', description: 'Stadium A is known for hosting major football matches and events.' },
  { id: 2, name: 'Stadium B', image: 'https://img2.beritasatu.com/cache/jakartaglobe/480x310-3/2023/07/1689938478-5500x3659.webp', description: 'Stadium B offers a great atmosphere for basketball games.' },
  { id: 3, name: 'Arena C', image: 'https://play-lh.googleusercontent.com/BiZNKluuzUrClf-O-PQi6DfdNmrMhk5CnZUDiUsrBxepUQUg8Qy1eUp8G-qhI6n--izU=w526-h296-rw', description: 'Arena C is perfect for tennis tournaments and events.' },
  { id: 4, name: 'Pool D', image: 'https://images.fastcompany.com/image/upload/f_webp,c_fit,w_1920,q_auto/wp-cms-2/2024/07/003-91163841-paris-olympic-pool.jpg', description: 'Pool D hosts various swimming competitions throughout the year.' },
  { id: 5, name: 'Court E', image: 'https://www.firstteaminc.com/application/files/1315/0290/9469/volleyball-court-lines-markings.jpg', description: 'Court E is a premier venue for volleyball championships.' },
];

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectChange = (event) => {
   
    const selectedId = Number(event.target.value);
     const location = locations.find(loc => loc.id === selectedId);
     setSelectedLocation(location);
   };

   return (
     <div id="locations" style={{ padding: '20px' }}>
       <h2>Sport Locations</h2>
       <select onChange={handleSelectChange} style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}>
         <option value="">Select a location</option>
         {locations.map(location => (
           <option key={location.id} value={location.id}>{location.name}</option>
         ))}
       </select>

       {selectedLocation && (
         <div style={{ textAlign: 'center' }}>
           <h3>{selectedLocation.name}</h3>
           <img
             src={selectedLocation.image}
             alt={selectedLocation.name}
             style={{ width: '300px', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
           />
           <p>{selectedLocation.description}</p>
         </div>
       )}
     </div>
   );
};

export default Locations;