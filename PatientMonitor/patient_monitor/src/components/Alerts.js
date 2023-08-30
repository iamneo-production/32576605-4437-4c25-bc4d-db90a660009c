import React, { useState } from 'react';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  const handleAlertAcknowledge = (alertId) => {
    // Remove the alert from the list when acknowledged
    setAlerts(alerts.filter(alert => alert.id !== alertId));
  };

  return (
    <div className="alerts">
      <h2>Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            {alert.message}
            <button onClick={() => handleAlertAcknowledge(alert.id)}>Acknowledge</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
