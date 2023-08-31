import { useState } from "react";
import "./App.css";
import AlertNotifications from "./components/AlertNotifications";
import ThresholdConfiguration from "./components/ThresholdConfiguration";

function App() {
  const [thresholds, setThresholds] = useState({
    heartRate: {
      min: 60,
      max: 100,
    },
    bloodPressure: {
      min: 120,
      max: 180,
    },
    temprature: {
      min: 98.6,
      max: 100.4,
    },
    respiratoryRate: {
      min: 12,
      max: 20,
    },
  });

  const vitalSigns = {
    heartRate: 78,
    bloodPressure: "120/80",
    temprature: 98.6,
    respiratoryRate: 16,
  };

  return (
    <>
      <div>
        <ThresholdConfiguration
          thresholds={thresholds}
          setThresholds={setThresholds}
        />
        <AlertNotifications vitalSigns={vitalSigns} thresholds={thresholds} />
      </div>
    </>
  );
}

export default App;