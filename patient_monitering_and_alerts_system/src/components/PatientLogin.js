import React, { useState } from 'react';
 import {  useNavigate ,Link} from 'react-router-dom';
import './PatientLogin.css'; // Import the CSS file




function PatientLogin(props) {
 const navigate=useNavigate();
  // const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');

  const [loginPassword, setLoginPassword] = useState('');




  const handleLogin = async (e) => {

    e.preventDefault();




    const response = await fetch('http://localhost:8080/patients');

    const patients = await response.json();

    const patient = patients.find(

      (p) => p.email === loginEmail && p.password === loginPassword

    );




    if (patient) {

      alert('Login successful!');
     //navigate.push('/dashboard');
 
navigate("/pd");
  //return <Navigate  to="/pd" />;


    } else {

      alert('Login failed!');

    }

  };



  return (

    <form className="form-container" onSubmit={handleLogin}>
      <h1>Patient Login</h1>

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
      <Link to="/register">Registration</Link> {/* Use Link component */}

    </form>

  );

}




export default PatientLogin;