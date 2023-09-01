import { useState } from "react";
import "./App.css";
import AlertNotifications from "./components/AlertNotifications";
import ThresholdConfiguration from "./components/ThresholdConfiguration";
npm
function App() {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 45,
      gender: "Male",
      medicalHistory: "Hypertension, Diabetes",
      currentCondition: "Stable",
      vitalSigns: {
        heartRate: 78,
        bloodPressure: "120/80",
        temprature: 98.6,
        respiratoryRate: 16,
      },
      thresholds: {
        heartRate: { min: 60, max: 100 },
        bloodPressure: { min: 120, max: 180 },
        temprature: { min: 98.6, max: 100.4 },
        respiratoryRate: { min: 12, max: 20 },
      },
    },
    {
      id: 2,
      name: "Lavanya",
      age: 45,
      gender: "Female",
      medicalHistory: "Diabetes",
      currentCondition: "Stable",
      vitalSigns: {
        heartRate: 120,
        bloodPressure: "220/200",
        temperature: 981.6,
        respiratoryRate: 1,
      },
      thresholds: {
        heartRate: { min: 60, max: 100 },
        bloodPressure: { min: 120, max: 180 },
        temperature: { min: 98.6, max: 100.4 },
        respiratoryRate: { min: 12, max: 20 },
      },
    },
   
  ]);

  return (
    <div className="App">
      {patients.map((patient) => (
        <div key={patient.id}>
          <ThresholdConfiguration patient={patient} setPatients={setPatients} />
          <AlertNotifications patient={patient} />
        </div>
      ))}
    </div>
  );
}

export default App;
