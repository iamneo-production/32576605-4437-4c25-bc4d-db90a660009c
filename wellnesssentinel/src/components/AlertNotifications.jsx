import { Alert, Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const AlertNotifications = ({ vitalSigns, thresholds }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const newAlerts = [];

    for (const key in vitalSigns) {
      const value = parseFloat(vitalSigns[key]);
      const { min, max } = thresholds[key];

      if (value < min || value > max) {
        newAlerts.push(`${key} is out of range`);
      }
    }

    setAlerts(newAlerts);
  }, [vitalSigns, thresholds]);

  
  return (
    <div>
      <Box
        sx={{
          background: "skyblue",
          padding: "10px",
          textAlign: "center",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <h2>Alert Notifications</h2>
      </Box>
      {alerts.length > 0 ? (
        <div>
          <h3>Alerts:</h3>
          <ul>
            {alerts.map((alert, index) => (
              <Alert key={index} severity="warning">
                {alert}
              </Alert>
            ))}
          </ul>
        </div>
      ) : (
        <Alert severity="info">No alerts at the moment.</Alert>
      )}
    </div>
  );
};

export default AlertNotifications;
