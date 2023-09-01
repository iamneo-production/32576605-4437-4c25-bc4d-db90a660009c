import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../api/API';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetchPatients()
      .then(data => {
        console.log("printing", data);
        setPatients(data);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleAttendPatient = (patientId) => {
    // Add your logic to attend to the patient here
    console.log(`Attending to patient with ID: ${patientId}`);
  };

  return (
    <div className="container">
      <h1>Dashboard Overview</h1>
      <div className="row">
        {patients.map(patient => (
          <div key={patient.id} className={`col-md-4 mb-4 ${patient.currentCondition === 'Critical' ? 'bg-danger' : 'bg-success'}`}>
            <div className="card">
              
              <div className="card-body">
                
                <h5 className="card-title">{patient.name}</h5>
                <p className="card-text">Heart Rate: {patient.vitalSigns.heartRate}</p>
                <p className="card-text">Blood Pressure: {patient.vitalSigns.bloodPressure}</p>
                <p className="card-text">Temperature: {patient.vitalSigns.temperature}</p>
                <p className="card-text">Respiratory Rate: {patient.vitalSigns.respiratoryRate}</p>
                <p className="card-text">Current Condition: {patient.currentCondition}</p>
                {patient.currentCondition === 'Critical' && (
                  <button onClick={() => handleAttendPatient(patient.id)}>Attend to Patient</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
