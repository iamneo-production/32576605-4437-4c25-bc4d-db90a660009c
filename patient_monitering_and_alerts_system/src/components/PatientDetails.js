import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PatientDetails.css'; // Import your CSS file

function PatientDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const patientName = searchParams.get('name');

  const [patientDetails, setPatientDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPatientDetails() {
      try {
        // Simulate authentication token or user ID
        const userId = '123'; // Replace with actual user ID or token
        
        const response = await fetch(`http://localhost:8080/patients?name=${encodeURIComponent(patientName)}&userId=${userId}`);
        const patient = await response.json();
        
        setPatientDetails(patient);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching patient details:', error);
        setLoading(false);
      }
    }

    fetchPatientDetails();
  }, [patientName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!patientDetails) {
    return <div>Error fetching patient details.</div>;
  }

  return (
    <div className="patient-details-container">
      <h1>Patient Details</h1>
      <table className="patient-table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{`${patientDetails.firstName} ${patientDetails.lastName}`}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{patientDetails.email}</td>
          </tr>
          <tr>
            <th>Contact No</th>
            <td>{patientDetails.contactNo}</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>{patientDetails.dateOfBirth}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{patientDetails.age}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{patientDetails.gender}</td>
          </tr>
          <tr>
            <th>Blood Group</th>
            <td>{patientDetails.bloodGroup}</td>
          </tr>
          {/* Add more rows for other patient details */}
        </tbody>
      </table>
    </div>
  );
}

export default PatientDetails;
