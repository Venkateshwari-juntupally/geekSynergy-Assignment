// Signup.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Signup = () => {
  const history = useHistory();
  
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(userData));
    history.push('/login')
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>User Signup</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} style={{ marginBottom: '10px', width: '100%' }} />
      <input type='password' name='password' placeholder='Password' onChange={handleChange} style={{ marginBottom: '10px', width: '100%' , height: '20px'}}/>
      <input type="text" name="email" placeholder="Email" onChange={handleChange} style={{ marginBottom: '10px', width: '100%' , height: '20px'}} />
      <input type="number" name="phone" placeholder="Phone" onChange={handleChange} style={{ marginBottom: '10px', width: '100%' , height: '20px'}} />
      <select onChange={handleChange} name='profession' style={{ marginBottom: '10px', width: '100%', height: '30px'}}>
      <option value='' style={{width: '100%'}}>Select Profession</option>
        <option value='Doctor'>Doctor</option>
        <option value='Engineer'>Engineer</option>
        <option value='Teacher'>Teacher</option>
        <option value='Government Employee'>Government Employee</option>
        <option value='Private Employee'>Private Employee</option>
        <option value='Daily Wage Labour'>Daily Wage Labour</option>
        <option value='Others'>Others</option>
      </select>
      <button onClick={handleSubmit} style={{ width: '30%', textAlign: 'Center' , backgroundColor: 'blue', fontWeight: "bold", color: "white", border: 'none', height: '30px', borderRadius: '10px'}}>Sign Up</button>
    </div>
  );
};

export default Signup;
