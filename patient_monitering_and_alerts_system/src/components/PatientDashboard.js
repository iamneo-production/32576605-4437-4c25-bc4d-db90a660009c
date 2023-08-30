import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientDashboard.css'; // Import your custom CSS file

function PatientDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Assuming you have a logout logic...
    // Clear session/token, etc.
    // history.push('/login'); // Navigate back to the login page
    navigate('/pd');
  };

  const handleBack = () => {
    // Navigate back to a previous route
    navigate(-1);
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="btn btn-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="container content-container">
        <h1 className="dashboard-heading">Patient Dashboard</h1>
        <div className="dashboard-buttons">
          <button className="btn btn-primary" onClick={handleBack}>
            Back
          </button>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-links">
            <a className="btn btn-primary" href="/patient-details">
              Show Details
            </a>
            <a className="btn btn-primary" href="/patient-reports">
              Show Reports
            </a>
          </div>
          {/* Your dashboard content goes here */}
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
