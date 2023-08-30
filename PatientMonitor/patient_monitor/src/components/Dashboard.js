import React, { useState } from 'react';

const Dashboard = () => {
  const [selectedVitalSigns, setSelectedVitalSigns] = useState([]);

  const handleVitalSignSelect = (vitalSign) => {
    if (selectedVitalSigns.includes(vitalSign)) {
      setSelectedVitalSigns(selectedVitalSigns.filter(sign => sign !== vitalSign));
    } else {
      setSelectedVitalSigns([...selectedVitalSigns, vitalSign]);
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedVitalSigns.includes('heartRate')}
            onChange={() => handleVitalSignSelect('heartRate')}
          />
          Heart Rate
        </label>
        {/* Add more checkboxes for other vital signs */}
      </div>
      {/* Display selected vital sign data here */}
    </div>
  );
};

export default Dashboard;
