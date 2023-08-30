import React from 'react';

const PatientProfile = ({ patientData }) => {
  return (
    <div className="patient-profile">
      <h2>{patientData.name}</h2>
      <p>Age: {patientData.age}</p>
      <p>Medical History: {patientData.medicalHistory}</p>
      {/* Display vital sign data here */}
    </div>
  );
};

export default PatientProfile;
