// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://7r3rtiffni.execute-api.us-east-1.amazonaws.com/prod/registerUser', {
        username,
        email,
        phone,
        password,
      });
      alert(response.data.message);
      window.location.href = '/login';
    } catch (error) {
      console.error(error);
      alert('Registration failed!');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Username:</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Phone Number:</label>
          <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <p>Already registered? <a href="/login">Login here</a></p>
      </form>
    </div>
  );
};

export default Register;
