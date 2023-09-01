import React, { useState } from 'react';
 import {  useNavigate ,Link} from 'react-router-dom';
import './DoctorLogin.css'; // Import the CSS file




function DoctorLogin(props) {
 const navigate=useNavigate();
  // const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');

  const [loginPassword, setLoginPassword] = useState('');




  const handleLogin = async (e) => {

    e.preventDefault();




    const response = await fetch('http://localhost:8083/doctor');

    const doctors = await response.json();

    const doctor = doctors.find(

      (p) => p.email === loginEmail && p.password === loginPassword

    );




    if (doctor) {
      alert('Login successful!');
      navigate(`/pd?name=${encodeURIComponent(doctor.name)}`);
    } else {
      alert('Login failed!');
    }

  };



  return (

    <form className="form-container" onSubmit={handleLogin}>
      <h1>Doctor Login</h1>

      <label htmlFor="loginEmail">Email: </label>

      <input

        type="email"

        id="loginEmail"

        value={loginEmail}

        onChange={(e) => setLoginEmail(e.target.value)}

        required

      /><br />




      <label htmlFor="loginPassword">Password: </label>

      <input

        type="password"

        id="loginPassword"

        value={loginPassword}

        onChange={(e) => setLoginPassword(e.target.value)}

        required

      /><br />




      <button type="submit">Login</button>
      <Link to="/register2">Registration</Link> {/* Use Link component */}

    </form>

  );

}




export default DoctorLogin;