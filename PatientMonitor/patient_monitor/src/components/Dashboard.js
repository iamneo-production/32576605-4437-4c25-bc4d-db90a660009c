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

  return (
    <div className="container">
      <h1>Dashboard Overview</h1>
      <div className="row">
        {patients.map(patient => (
          <div key={patient.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{patient.name}</h5>
                <p className="card-text">Heart Rate: {patient.vitalSigns.heartRate}</p>
                <p className="card-text">Blood Pressure: {patient.vitalSigns.bloodPressure}</p>
                <p className="card-text">Temperature: {patient.vitalSigns.temperature}</p>
                <p className="card-text">Respiratory Rate: {patient.vitalSigns.respiratoryRate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
