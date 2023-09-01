import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DoctorRegistration.css'; // Import the CSS file




function DoctorRegistration() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [gender, setGender] = useState('');

  const [age, setAge] = useState('');

  const [qualification, setQualification] = useState('');

  const [city, setCity] = useState('');




  const handleRegistration = async (e) => {

    e.preventDefault();




    // Check if email already exists

    const response = await fetch('http://localhost:8083/doctor');

    const doctor = await response.json();

    const existingDoctor = doctor.find((p) => p.email === email);




    if (existingDoctor) {

      alert('This email is already registered. Please use a different email.');

      return;

    }




    // Proceed with registration

    const registrationResponse = await fetch('http://localhost:8083/doctor', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({

        name,

        email,

        password,

        gender,

        age,

        qualification,

        city,

      }),

    });




    if (registrationResponse.ok) {

      alert('Registration successful!');

      // Reset form values

      setName('');

      setEmail('');

      setPassword('');

      setGender('');

      setAge('');

      setQualification('');

      setCity('');

    } else {

      alert('Registration failed!');

    }

  };




  return (

    <form className="form-container" onSubmit={handleRegistration}>
<div className="center-heading"> {/* Center the heading */}
        <h1>Doctor Registration Form</h1>
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




      <label htmlFor="age">Age: </label>

      <input

        type="number"

        id="age"

        value={age}

        onChange={(e) => setAge(e.target.value)}

        required

      /><br />

<label htmlFor="qualification">Qualification: </label>

<input

  type="text"

  id="qualification"

  value={qualification}

  onChange={(e) => setQualification(e.target.value)}

  required

/><br />

<label htmlFor="city">City: </label>

      <input

        type="text"

        id="city"

        value={city}

        onChange={(e) => setCity(e.target.value)}

        required

      /><br />




      <button type="submit">Register</button>
      <div className="login-link">
       <Link to="/login">Log in here</Link>
</div>
    </form>

  );

}




export default DoctorRegistration;