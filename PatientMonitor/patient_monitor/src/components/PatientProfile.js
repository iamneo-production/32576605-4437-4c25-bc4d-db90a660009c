import React from 'react';

const PatientProfile = ({ patient }) => {
  return (
    <div className="container">
      <h1>Patient Profile</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{patient.name}</h5>
          <p className="card-text">Age: {patient.age}</p>
          <p className="card-text">Medical History: {patient.medicalHistory}</p>
          {/* Display other patient information */}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
