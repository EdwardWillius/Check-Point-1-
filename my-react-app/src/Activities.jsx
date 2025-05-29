// Activities.jsx
import React, { useState } from 'react';

// Data aktivitas
const activities = [
  { id: 1, name: 'Football Match', description: 'Join us for an exciting football match!', date: '2023-09-20' },
  { id: 2, name: 'Basketball Game', description: 'Come and watch the thrilling basketball game.', date: '2023-09-22' },
  { id: 3, name: 'Tennis Tournament', description: 'Participate in our annual tennis tournament.', date: '2023-09-25' },
  { id: 4, name: 'Volleyball Championship', description: 'Be part of the volleyball championship.', date: '2023-09-28' },
  { id: 5, name: 'Swimming Competition', description: 'Compete in the swimming competition.', date: '2023-09-30' },
];

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleSelectChange = (event) => {
    const selectedId = Number(event.target.value);
    const activity = activities.find(act => act.id === selectedId);
    setSelectedActivity(activity);
  };

  return (
    <div id="activities" style={{ padding: '20px' }}>
      <h2>Sport Activities</h2>
      <select onChange={handleSelectChange} style={{ padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
        <option value="" disabled selected>Select an activity</option>
        {activities.map(activity => (
          <option key={activity.id} value={activity.id}>{activity.name}</option>
        ))}
      </select>
      
     {selectedActivity && (
        <div style={{ padding: '15px', borderRadius: '8px', backgroundColor: '#f0f8ff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
          <h3>{selectedActivity.name}</h3>
          <p><strong>Description:</strong> {selectedActivity.description}</p>
          <p><strong>Date:</strong> {selectedActivity.date}</p>
        </div>
      )}
    </div>
  );
};

export default Activities;