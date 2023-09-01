import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PatientRegistrationForm.css'; // Import the CSS file




function PatientRegistrationForm() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [bloodGroup, setBloodGroup] = useState('');

  const [gender, setGender] = useState('');

  const [age, setAge] = useState('');




  const handleRegistration = async (e) => {

    e.preventDefault();




    // Check if email already exists

    const response = await fetch('http://localhost:8080/patients');

    const patients = await response.json();

    const existingPatient = patients.find((p) => p.email === email);




    if (existingPatient) {

      alert('This email is already registered. Please use a different email.');

      return;

    }




    // Proceed with registration

    const registrationResponse = await fetch('http://localhost:8080/patients', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify({

        name,

        email,

        password,

        bloodGroup,

        gender,

        age,

      }),

    });




    if (registrationResponse.ok) {

      alert('Registration successful!');

      // Reset form values

      setName('');

      setEmail('');

      setPassword('');

      setBloodGroup('');

      setGender('');

      setAge('');

    } else {

      alert('Registration failed!');

    }

  };




  return (

    <form className="form-container" onSubmit={handleRegistration}>
<div className="center-heading"> {/* Center the heading */}
        <h1>Patient Registration Form</h1>
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




      <label htmlFor="bloodGroup">Blood Group: </label>

      <input

        type="text"

        id="bloodGroup"

        value={bloodGroup}

        onChange={(e) => setBloodGroup(e.target.value)}

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




      <button type="submit">Register</button>
      <div className="login-link">
       <Link to="/login">Log in here</Link>
</div>
    </form>

  );

}




export default PatientRegistrationForm;