// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = () => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.name === loginData.name && userData.password === loginData.password) {
      // Navigate to the next screen or show the movie data
    } else {
      setErrorMessage('Invalid Credentials');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} style={{ marginBottom: '10px', width: '100%' }} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} style={{ marginBottom: '10px', width: '100%' }} />
      <button onClick={handleLogin} style={{ width: '100%' }}>Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Login;
