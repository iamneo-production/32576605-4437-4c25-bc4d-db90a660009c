import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminRegistration.css'; // Import the CSS file




function AdminRegistration() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');


  const [gender, setGender] = useState('');





  const handleRegistration = async (e) => {

    e.preventDefault();




    // Check if email already exists

    const response = await fetch('http://localhost:8082/admin');

    const admin = await response.json();

    const existingAdmin = admin.find((p) => p.email === email);




    if (existingAdmin) {

      alert('This email is already registered. Please use a different email.');

      return;

    }




    // Proceed with registration

    const registrationResponse = await fetch('http://localhost:8082/admin', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({

        name,

        email,

        password,

        gender,



      }),

    });




    if (registrationResponse.ok) {

      alert('Registration successful!');

      // Reset form values

      setName('');

      setEmail('');

      setPassword('');

      setGender('');

    } else {

      alert('Registration failed!');

    }

  };




  return (

    <form className="form-container" onSubmit={handleRegistration}>
<div className="center-heading"> {/* Center the heading */}
        <h1>Admin Registration Form</h1>
      </div>
      <label htmlFor="name">Name: </label>

      <input

        type="text"

        id="name"

        value={name}

        onChange={(e) => setName(e.target.value)}

        required

      /><br />




      <label htmlFor="email">Email: </label>

      <input

        type="email"

        id="email"

        value={email}

        onChange={(e) => setEmail(e.target.value)}

        required

      /><br />




      <label htmlFor="password">Password: </label>

      <input

        type="password"

        id="password"

        value={password}

        onChange={(e) => setPassword(e.target.value)}

        required

      /><br />



      <label>Gender: </label>

      <input

        type="radio"

        id="genderMale"

        name="gender"

        value="Male"

        checked={gender === 'Male'}

        onChange={(e) => setGender(e.target.value)}

        required

      />Male

      <input

        type="radio"

        id="genderFemale"

        name="gender"

        value="Female"

        checked={gender === 'Female'}

        onChange={(e) => setGender(e.target.value)}

        required

      />Female<br />



      <button type="submit">Register</button>
      <div className="login-link">
       <Link to="/login">Log in here</Link>
</div>
    </form>

  );

}




export default AdminRegistration;